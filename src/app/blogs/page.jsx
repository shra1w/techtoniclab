import Link from 'next/link';
import { getAllPosts } from '@/libs/blog';
import {
  HiOutlineArrowUpRight,
  HiOutlineClock,
  HiOutlineCalendar,
  HiOutlineSparkles,
  HiOutlineArrowLeft,
} from 'react-icons/hi2';
import NewBlogTrigger from './NewBlogTrigger';

export const metadata = {
  title: 'Blog — Insights on Data, AI & Engineering',
  description:
    'Explore articles on data science, AI, machine learning, and modern engineering practices from the Techtonic team.',
  alternates: { canonical: '/blogs' },
  openGraph: {
    title: 'Techtonic Blog',
    description: 'Insights on data, AI, and engineering.',
    url: '/blogs',
    type: 'website',
  },
};

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogsPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors"
          >
            <HiOutlineArrowLeft className="text-lg" />
            <span>Back to Techtonic</span>
          </Link>
          <NewBlogTrigger variant="nav" />
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
            <HiOutlineSparkles className="text-sm" />
            <span>The Techtonic Journal</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-6">
            Stories that move
            <br />
            <span className="shimmer-text">the industry forward.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            Honest takes on data, AI, and engineering — written for builders who care about the
            craft.
          </p>

          <div className="mt-10 flex items-center gap-6 text-sm text-neutral-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {posts.length} {posts.length === 1 ? 'article' : 'articles'} published
            </span>
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
              Featured
            </h2>
            <div className="h-px flex-1 ml-6 bg-neutral-200" />
          </div>

          <Link
            href={`/blogs/${featured.slug}`}
            className="group block relative overflow-hidden rounded-3xl border border-neutral-200 hover:border-emerald-500/50 transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Cover */}
              <div
                className={`relative aspect-[16/10] md:aspect-auto bg-gradient-to-br ${featured.coverGradient} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <span className="text-7xl font-bold text-white/20 select-none">
                    {String(posts.indexOf(featured) + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {(featured.tags || []).slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-sm text-neutral-500 mb-5">
                    <span className="flex items-center gap-1.5">
                      <HiOutlineCalendar className="text-base" />
                      {formatDate(featured.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <HiOutlineClock className="text-base" />
                      {featured.readingTime}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-5 group-hover:text-emerald-600 transition-colors duration-300">
                    {featured.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {featured.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-sm font-semibold">
                      {featured.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-neutral-700">{featured.author}</span>
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group-hover:text-emerald-600 transition-colors">
                    Read article
                    <HiOutlineArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Rest of posts */}
      {rest.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">
              All articles
            </h2>
            <div className="h-px flex-1 ml-6 bg-neutral-200" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, idx) => (
              <PostCard key={post.slug} post={post} index={idx + 2} />
            ))}
          </div>
        </section>
      )}

      {/* Empty-state CTA */}
      {posts.length < 3 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
          <NewBlogTrigger variant="card" />
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Techtonic. Crafted with care.
      </footer>
    </main>
  );
}

function PostCard({ post, index }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group card-lift relative flex flex-col rounded-2xl border border-neutral-200 bg-white hover:border-emerald-500/50 overflow-hidden"
    >
      <div
        className={`relative aspect-[16/10] bg-gradient-to-br ${post.coverGradient} overflow-hidden`}
      >
        <div className="absolute inset-0 bg-grid opacity-20" />
        <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium">
          {String(index).padStart(2, '0')}
        </span>
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
          {(post.tags || []).slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
          <span className="flex items-center gap-1">
            <HiOutlineCalendar />
            {formatDate(post.date)}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <HiOutlineClock />
            {post.readingTime}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight leading-snug mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 flex-1">
          {post.description}
        </p>

        <div className="mt-5 pt-5 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white text-xs font-semibold">
              {post.author.charAt(0)}
            </div>
            <span className="text-xs font-medium text-neutral-700">{post.author}</span>
          </div>
          <HiOutlineArrowUpRight className="text-lg text-neutral-400 group-hover:text-emerald-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </Link>
  );
}