#!/bin/bash
# Upload the built site in _site/ to the web host over SSH with rsync.
# Settings come from .env.deploy (see .env.deploy.example). Pass --dry-run to preview changes.
set -euo pipefail
cd "$(dirname "$0")"

if [ ! -f .env.deploy ]; then
  echo "Missing .env.deploy. Copy .env.deploy.example and fill it in." >&2
  exit 1
fi
source .env.deploy

: "${DEPLOY_HOST:?Set DEPLOY_HOST in .env.deploy}"
: "${DEPLOY_USER:?Set DEPLOY_USER in .env.deploy}"
: "${DEPLOY_PATH:?Set DEPLOY_PATH in .env.deploy}"
DEPLOY_PORT="${DEPLOY_PORT:-22}"

# --delete removes remote files that aren't in _site, so refuse anything that looks like a home or root folder
case "$DEPLOY_PATH" in
  /|~|~/|.|./|"/home/$DEPLOY_USER"|"/home/$DEPLOY_USER/")
    echo "Refusing to deploy to '$DEPLOY_PATH'. Point DEPLOY_PATH at the web root, e.g. public_html." >&2
    exit 1;;
esac

if [ ! -f _site/index.html ]; then
  echo "No build found in _site/. Run npm run build first." >&2
  exit 1
fi

SSH="ssh -p $DEPLOY_PORT"
if [ -n "${DEPLOY_KEY:-}" ]; then
  SSH="$SSH -i $DEPLOY_KEY"
fi

DRY=""
if [ "${1:-}" = "--dry-run" ]; then
  DRY="--dry-run"
  echo "Dry run: nothing will be changed on the server."
fi

# Leave cPanel's own folders alone (SSL validation, CGI, logs)
rsync -avz --delete $DRY \
  --exclude '.well-known' \
  --exclude 'cgi-bin' \
  --exclude 'error_log' \
  -e "$SSH" \
  _site/ "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/"

echo "Deployed to $DEPLOY_HOST:$DEPLOY_PATH${DRY:+ (dry run)}"
