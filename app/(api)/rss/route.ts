import { getBlogPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/config/site';

function escapeXml(unsafe: string) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export async function GET() {
    const allBlogs = await getBlogPosts();

    // Clone before sorting to avoid mutating the source array
    const sorted = [...allBlogs].sort((a, b) => {
        const aTime = new Date(a.metadata.publishedAt).getTime();
        const bTime = new Date(b.metadata.publishedAt).getTime();

        return bTime - aTime;
    });

    const itemsXml = sorted
        .map((post) => {
            const title = escapeXml(post.metadata.title || '');
            const link = `${siteConfig.baseUrl}/blog/${encodeURIComponent(post.slug)}`;
            const description = escapeXml(post.metadata.summary || '');
            const pubDate = new Date(post.metadata.publishedAt).toUTCString();

            return `<item>
  <title>${title}</title>
  <link>${link}</link>
  <description>${description}</description>
  <pubDate>${pubDate}</pubDate>
</item>`;
        })
        .join('\n');

    const lastBuild = sorted.length > 0 ? new Date(sorted[0].metadata.publishedAt).toUTCString() : new Date().toUTCString();

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Blogs</title>
    <link>${siteConfig.baseUrl}</link>
    <description>Latest Blogs</description>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    ${itemsXml}
  </channel>
</rss>`;

    return new Response(rssFeed, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8'
        }
    });
}
