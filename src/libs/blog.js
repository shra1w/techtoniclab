import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(),'src', 'content', 'blog');

// Fail fast if directory missing — surface the misconfig immediately.
function ensureDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    throw new Error(`Blog content directory not found: ${BLOG_DIR}`);
  }
}

function getFileSlugs() {
  ensureDir();
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

export function getAllPosts() {
  const slugs = getFileSlugs();
  const posts = slugs.map((slug) => {
    const post = getPostBySlug(slug);
    return { ...post, content: undefined }; // strip body for listing
  });
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  ensureDir();
  const filePathMdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const filePathMd = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(filePathMdx) ? filePathMdx : filePathMd;

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  // Strict required fields — fail loud if any is missing.
  const required = ['title', 'description', 'date', 'author'];
  for (const field of required) {
    if (!data[field]) {
      throw new Error(`Post "${slug}" missing required frontmatter field: ${field}`);
    }
  }

  const stats = readingTime(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author,
    tags: data.tags || [],
    coverImage: data.coverImage || null,
    coverGradient: data.coverGradient || 'from-emerald-500 via-emerald-600 to-neutral-900',
    readingTime: stats.text,
    wordCount: stats.words,
    content,
  };
}

export function getAllSlugs() {
  return getFileSlugs();
}

export function getRelatedPosts(currentSlug, limit = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}


export function deletePostBySlug(slug) {
  ensureDir();

  if (typeof slug !== 'string' || !/^[a-z0-9-]+$/i.test(slug)) {
    throw new Error(`deletePostBySlug: invalid slug: ${slug}`);
  }

  const filePathMdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const filePathMd = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(filePathMdx)
    ? filePathMdx
    : fs.existsSync(filePathMd)
    ? filePathMd
    : null;

  if (!filePath) {
    throw new Error(`deletePostBySlug: post not found: ${slug}`);
  }

  // Path-traversal guard — refuse anything outside BLOG_DIR.
  const resolved = path.resolve(filePath);
  const dirResolved = path.resolve(BLOG_DIR);
  if (!resolved.startsWith(dirResolved + path.sep)) {
    throw new Error('deletePostBySlug: path traversal blocked');
  }

  fs.unlinkSync(filePath);
}