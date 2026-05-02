import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/libs/blog';
import DeleteButton from './DeleteButton';
import {
  HiOutlineArrowLeft,
  HiOutlineClock,
  HiOutlineCalendar,
  HiOutlineArrowUpRight,
  HiOutlineShare,
} from 'react-icons/hi2';
import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return {};
  }

  const url = `/blogs/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

// ──────────────────────────────────────────────────────────────────────
// Markdown render components — fully self-contained styling.
// Every element gets explicit Tailwind classes, so output works
// regardless of global CSS, Tailwind config paths, or plugin setup.
// ──────────────────────────────────────────────────────────────────────
const markdownComponents = {
  h1: ({ children, ...props }) => (
    <h1
      className="text-4xl sm:text-5xl font-bold tracking-tight mt-16 mb-6 text-neutral-900 scroll-mt-24 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="text-3xl sm:text-4xl font-bold tracking-tight mt-16 mb-6 text-neutral-900 scroll-mt-24 first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="text-2xl sm:text-3xl font-semibold tracking-tight mt-12 mb-4 text-neutral-900 scroll-mt-24"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="text-xl font-semibold tracking-tight mt-10 mb-3 text-neutral-900"
      {...props}
    >
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-lg leading-[1.85] text-neutral-700 my-6">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-8 space-y-3 pl-6">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-8 space-y-3 pl-6 list-decimal marker:text-emerald-500 marker:font-bold">
      {children}
    </ol>
  ),
  li: ({ children, ordered, ...props }) => {
    if (ordered) {
      return (
        <li className="text-lg leading-[1.85] text-neutral-700 pl-2" {...props}>
          {children}
        </li>
      );
    }
    return (
      <li className="text-lg leading-[1.85] text-neutral-700 relative pl-2" {...props}>
        <span
          className="absolute -left-5 top-[0.75em] w-1.5 h-1.5 rounded-full bg-emerald-500"
          aria-hidden
        />
        {children}
      </li>
    );
  },
  blockquote: ({ children }) => (
    <blockquote className="my-10 border-l-4 border-emerald-500 pl-6 pr-4 py-3 italic text-xl text-neutral-800 bg-emerald-50/40 rounded-r-xl">
      {children}
    </blockquote>
  ),
  code: ({ inline, className, children, ...props }) => {
    if (inline) {
      return (
        <code
          className="bg-neutral-100 text-neutral-900 px-1.5 py-0.5 rounded text-[0.9em] font-mono border border-neutral-200"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={`${className || ''} font-mono text-sm`} {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-8 bg-neutral-950 text-neutral-100 p-5 rounded-2xl overflow-x-auto text-sm leading-relaxed">
      {children}
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-neutral-900">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-neutral-700">{children}</em>,
  a: ({ href = '', children, ...props }) => {
    const isInternal = href.startsWith('/') || href.startsWith('#');
    const cls =
      'text-emerald-600 font-medium underline decoration-emerald-200 underline-offset-4 hover:decoration-emerald-500 transition-colors';
    if (isInternal) {
      return (
        <Link href={href} className={cls} {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
        {children}
      </a>
    );
  },
  hr: () => <hr className="my-14 border-0 border-t border-neutral-200" />,
  // eslint-disable-next-line @next/next/no-img-element
  img: ({ src, alt }) => (
    <img src={src} alt={alt || ''} className="my-10 rounded-2xl w-full" />
  ),
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-neutral-200">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-neutral-50 border-b border-neutral-200">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 font-semibold text-neutral-900">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 border-t border-neutral-100 text-neutral-700">{children}</td>
  ),
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const related = getRelatedPosts(slug, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'Techtonic' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `/blogs/${post.slug}` },
    keywords: (post.tags || []).join(', '),
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top nav */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-white/70 border-b border-neutral-200/60">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors"
          >
            <HiOutlineArrowLeft className="text-lg" />
            <span>All articles</span>
          </Link>
          <div className="flex items-center gap-1">
            <ShareMenu title={post.title} />
            <span className="w-px h-5 bg-neutral-200 mx-1" aria-hidden />
            <DeleteButton slug={post.slug} title={post.title} />
          </div>
        </div>
      </nav>

      {/* Cover */}
      <section
        className={`relative h-[40vh] sm:h-[55vh] bg-gradient-to-br ${post.coverGradient} overflow-hidden`}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="relative h-full max-w-4xl mx-auto px-5 sm:px-8 flex flex-col justify-end pb-10 sm:pb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {(post.tags || []).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-white max-w-3xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Meta */}
      <section className="border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-neutral-600">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-xs font-semibold">
              {post.author.charAt(0)}
            </div>
            <span className="font-medium text-neutral-900">{post.author}</span>
          </div>
          <span className="flex items-center gap-1.5">
            <HiOutlineCalendar />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <HiOutlineClock />
            {post.readingTime}
          </span>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed font-light mb-12 pb-12 border-b border-neutral-200">
          {post.description}
        </p>

        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={markdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* CTA strip */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-16">
        <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-emerald-950 p-10 sm:p-14 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight">
              Enjoyed this read?
            </h3>
            <p className="text-neutral-300 mb-6 max-w-lg">
              Share it with someone who needs it, or dive into more articles from our team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-400 transition-colors"
              >
                More articles
                <HiOutlineArrowUpRight className="text-base" />
              </Link>
              <ShareMenu title={post.title} dark />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-neutral-200 bg-neutral-50/50">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-8">
              Continue reading
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blogs/${p.slug}`}
                  className="group card-lift block rounded-2xl border border-neutral-200 bg-white p-6 hover:border-emerald-500/50"
                >
                  <div className="text-xs text-neutral-500 mb-3 flex items-center gap-2">
                    <HiOutlineCalendar />
                    {formatDate(p.date)}
                  </div>
                  <h3 className="font-bold tracking-tight leading-snug mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2">{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-neutral-200 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Techtonic. Crafted with care.
      </footer>
    </main>
  );
}

function ShareMenu({ title, dark = false }) {
  const text = encodeURIComponent(title);
  const baseClass = dark
    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
    : 'bg-neutral-100 hover:bg-emerald-50 text-neutral-700 hover:text-emerald-600 border-transparent';
  return (
    <div className="flex items-center gap-2">
      {!dark && <HiOutlineShare className="text-neutral-400 hidden sm:block" />}
      <a
        href={`https://twitter.com/intent/tweet?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={`p-2 rounded-full border transition-all hover:scale-110 ${baseClass}`}
      >
        <FaXTwitter className="text-sm" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={`p-2 rounded-full border transition-all hover:scale-110 ${baseClass}`}
      >
        <FaLinkedin className="text-sm" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=&t=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={`p-2 rounded-full border transition-all hover:scale-110 ${baseClass}`}
      >
        <FaFacebook className="text-sm" />
      </a>
    </div>
  );
}