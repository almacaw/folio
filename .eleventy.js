const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const Image = require("@11ty/eleventy-img");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const embedVimeo = require("eleventy-plugin-vimeo-embed");

async function imageShortcode(src, alt, caption, shadowclass, sizes = "100vw") {
  if(alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [320, 640, 960],
    formats: ['jpeg', 'png'],
    outputDir: "./_site/img"
  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `
  <figure class="${shadowclass}">
  <picture>
    ${Object.values(metadata).map(imageFormat => {
      return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
    }).join("\n")}
      <img
        src="${lowsrc.url}"
        alt="${alt}"
        loading="lazy"
        decoding="async"
        >
    </picture>
    <figcaption>${caption}</figcaption>
    </figure>`;
}


module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPlugin(embedVimeo);

  // To enable merging of tags
  eleventyConfig.setDataDeepMerge(true)

  // Copy these static files to _site folder
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/manifest.json')
  eleventyConfig.addPassthroughCopy('src/robots.txt')
  eleventyConfig.addPassthroughCopy('src/.htaccess')
  eleventyConfig.addPassthroughCopy('src/.cpanel.yml')

  // To create excerpts
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_alias: 'post_excerpt',
    excerpt_separator: '<!-- excerpt -->'
  })

  // To create a filter to determine duration of post
  eleventyConfig.addFilter('readTime', (value) => {
    const content = value
    const textOnly = content.replace(/(<([^>]+)>)/gi, '')
    const readingSpeedPerMin = 450
    return Math.max(1, Math.floor(textOnly.length / readingSpeedPerMin))
  })

  // Enable us to iterate over all the tags, excluding posts and all
  eleventyConfig.addCollection('tagList', collection => {
    const tagsSet = new Set()
    collection.getAll().forEach(item => {
      if (!item.data.tags) return
      item.data.tags
        .filter(tag => !['posts', 'all'].includes(tag))
        .forEach(tag => tagsSet.add(tag))
    })
    return Array.from(tagsSet).sort()
  })


  // Published case studies in homepage order, set by the `order` front matter
  eleventyConfig.addCollection('work', collection => {
    return collection.getFilteredByTag('case-studies')
      .filter(item => item.data.published)
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99))
  })

  const md = markdownIt({ html: true, linkify: true })
  md.use(markdownItAnchor, {
    level: [1, 2],
    permalink: markdownItAnchor.permalink.headerLink({
      safariReaderFix: true,
      class: 'header-anchor',
    })
  })
  eleventyConfig.setLibrary('md', md)

  // asset_img shortcode
  eleventyConfig.addLiquidShortcode('asset_img', (filename, alt, caption) => {
    return `<figure>
  <img src="/assets/img/posts/${filename}" alt="${alt}" />
  <figcaption>${caption}</figcaption>
</figure>`
  })

  // Figma prototype shortcode
  eleventyConfig.addLiquidShortcode('figma-proto', (url, width, height) => {
    return `<div class="flex content-center"><iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" src="${url}" width="${width}" height="${height}" allowfullscreen="allowfullscreen"></iframe></div>`
  })

  // Loom prototype shortcode
  eleventyConfig.addLiquidShortcode('loom', (url) => {
    return `<div style="position: relative; padding-bottom: 94.07665505226481%; height: 0;"><iframe src="${url}" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`
  })

  // mp4 video shortcode
  eleventyConfig.addLiquidShortcode('mp4', (url) => {
    return `<video controls>
   <source src="${url}" type="video/mp4">
  </video>`
  })



  return {
    dir: {
      input: 'src'
    }
  }
}
