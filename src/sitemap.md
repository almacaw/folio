---
permalink: /sitemap.xml
eleventyExcludeFromCollections: true
templateEngineOverride: liquid
---
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    {% for page in collections.all %}
    {% unless page.data.published == false %}
        <url>
            <loc>{{ site.url }}{{ page.url | url }}</loc>
            <lastmod>{{ page.date | date: "%Y-%m-%d" }}</lastmod>
        </url>
    {% endunless %}
    {% endfor %}
</urlset>
