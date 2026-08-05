export interface SubstackPost {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  coverImage?: string;
}

// Subdomain-based API works regardless of whether the frontend uses @username format
const SUBDOMAIN = process.env.SUBSTACK_SUBDOMAIN ?? 'ladycyd';
const API_BASE = `https://${SUBDOMAIN}.substack.com/api/v1`;

export async function fetchSubstackPosts(limit = 12): Promise<SubstackPost[]> {
  try {
    const res = await fetch(
      `${API_BASE}/posts?limit=${limit}&offset=0`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];

    const data = await res.json() as any[];

    return data
      .filter((p) => p.type === 'newsletter' || p.type === 'post' || !p.type)
      .map((p) => ({
        title: p.title ?? '',
        excerpt: p.subtitle ?? p.description ?? '',
        url: p.canonical_url ?? `https://${SUBDOMAIN}.substack.com/p/${p.slug}`,
        date: formatDate(p.post_date ?? p.published_at ?? ''),
        coverImage: p.cover_image ?? undefined,
      }));
  } catch {
    return [];
  }
}

function formatDate(raw: string): string {
  if (!raw) return '';
  try {
    return new Date(raw).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return raw;
  }
}
