'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  HiOutlineArrowLeft,
  HiOutlineCloudArrowDown,
  HiOutlineClipboardDocument,
  HiOutlineCheck,
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineSparkles,
  HiOutlineXMark,
  HiOutlinePlus,
  HiOutlineInformationCircle,
} from 'react-icons/hi2';
import { isAuthorized } from '@/libs/auth-gate';
import AuthDialog from '@/libs/AuthDialog';

const GRADIENT_PRESETS = [
  { id: 'emerald', label: 'Emerald',  classes: 'from-emerald-500 via-teal-600 to-neutral-900' },
  { id: 'mono',    label: 'Mono',     classes: 'from-neutral-700 via-neutral-800 to-black' },
  { id: 'rose',    label: 'Rose',     classes: 'from-rose-500 via-pink-600 to-neutral-900' },
  { id: 'indigo',  label: 'Indigo',   classes: 'from-indigo-500 via-violet-600 to-neutral-900' },
  { id: 'amber',   label: 'Amber',    classes: 'from-amber-500 via-orange-600 to-neutral-900' },
];

function slugify(s) {
  return s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

const STARTER_BODY = `Start with a strong opening line that hooks the reader.

## Why this matters

Explain the context. Why should anyone keep reading?

- Point one
- Point two
- Point three

> A great pull-quote keeps the reader scrolling.

## Going deeper

Use **bold** for emphasis, *italics* for nuance, and \`inline code\` for technical terms.

\`\`\`js
// fenced code blocks render with syntax styling
function hello() {
  return "world";
}
\`\`\`

## Closing

Wrap up with a clear takeaway your reader can act on.
`;

export default function AddNewBlogPage() {
  // Auth gate — 'checking' avoids hydration flicker, then resolves on mount.
  const [authState, setAuthState] = useState('checking'); // 'checking' | 'denied' | 'authorized'
  
  useEffect(() => {
    setAuthState(isAuthorized() ? 'authorized' : 'denied');
  }, []);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('Techtonic Team');
  const [date, setDate] = useState(todayISO());
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);
  const [gradient, setGradient] = useState(GRADIENT_PRESETS[0].id);
  const [body, setBody] = useState(STARTER_BODY);
  const [view, setView] = useState('edit'); // 'edit' | 'preview'
  const [copied, setCopied] = useState(false);

  const slug = useMemo(() => (title ? slugify(title) : 'untitled-post'), [title]);
  const gradientClasses = useMemo(
    () => GRADIENT_PRESETS.find((g) => g.id === gradient)?.classes || GRADIENT_PRESETS[0].classes,
    [gradient]
  );

  const wordCount = body.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  const errors = [];
  if (!title.trim()) errors.push('Title is required');
  if (!description.trim()) errors.push('Description is required');
  if (description.length > 0 && description.length < 50) errors.push('Description should be at least 50 characters for SEO');
  if (!body.trim() || body.trim() === STARTER_BODY.trim()) errors.push('Article body is empty or unchanged');
  const isValid = errors.length === 0;

  const mdxOutput = useMemo(() => {
    const fm = [
      '---',
      `title: ${JSON.stringify(title || 'Untitled')}`,
      `description: ${JSON.stringify(description || '')}`,
      `date: ${JSON.stringify(date)}`,
      `author: ${JSON.stringify(author || 'Techtonic Team')}`,
      `tags: [${tags.map((t) => JSON.stringify(t)).join(', ')}]`,
      `coverGradient: ${JSON.stringify(gradientClasses)}`,
      '---',
      '',
      body.trim(),
      '',
    ].join('\n');
    return fm;
  }, [title, description, date, author, tags, gradientClasses, body]);

  function addTag() {
    const t = tagInput.trim();
    if (!t) return;
    if (tags.includes(t)) {
      setTagInput('');
      return;
    }
    if (tags.length >= 6) return;
    setTags([...tags, t]);
    setTagInput('');
  }

  function removeTag(t) {
    setTags(tags.filter((x) => x !== t));
  }

  function handleDownload() {
    if (!isValid) return;
    const blob = new Blob([mdxOutput], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}.mdx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  async function handleCopy() {
    if (!isValid) return;
    await navigator.clipboard.writeText(mdxOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  // Render gates first.
  if (authState === 'checking') {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-neutral-200 border-t-emerald-500 rounded-full animate-spin" />
      </main>
    );
  }

  if (authState === 'denied') {
    return (
      <AuthDialog
        mode="page"
        onSuccess={() => setAuthState('authorized')}
      />
    );
  }

  return (
    <main className="min-h-screen pt-10 bg-white text-neutral-900 pb-12">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-neutral-200/60">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors"
          >
            <HiOutlineArrowLeft className="text-lg" />
            <span className="hidden sm:inline">Cancel</span>
          </Link>

          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {wordCount} words · {readingTime} min read
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              disabled={!isValid}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied ? <HiOutlineCheck /> : <HiOutlineClipboardDocument />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy MDX'}</span>
            </button>
            <button
              onClick={handleDownload}
              disabled={!isValid}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-emerald-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <HiOutlineCloudArrowDown className="text-lg" />
              <span className="hidden sm:inline">Download</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero strip */}
      <section className="border-b border-neutral-200 bg-neutral-50/30">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-4">
            <HiOutlineSparkles />
            <span>Compose</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">New article</h1>
          <p className="text-sm text-neutral-500 mt-2">
            Fill in the metadata, write the body, then download or copy the <code className="bg-neutral-100 px-1.5 py-0.5 rounded text-[0.85em]">.mdx</code> file.
          </p>
        </div>
      </section>

      {/* Vertical Single Column Layout (Desktop & Mobile) */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-8 space-y-10">
        
        {/* Top: Metadata */}
        <div className="space-y-6">
          <Field label="Title" required>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="An honest take on…"
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-base font-medium"
            />
            {title && (
              <p className="text-xs text-neutral-400 mt-2 truncate">
                URL: <span className="text-emerald-600">/blogs/{slug}</span>
              </p>
            )}
          </Field>

          <Field
            label="Description"
            required
            hint={`${description.length} chars · aim for 120–160`}
          >
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="A short summary used in search results and social previews."
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-sm resize-none"
            />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Author">
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-sm"
              />
            </Field>
            <Field label="Date">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-sm"
              />
            </Field>
          </div>

          <Field label="Tags" hint="Up to 6">
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium"
                >
                  {t}
                  <button
                    onClick={() => removeTag(t)}
                    className="hover:text-emerald-900 transition-colors"
                    aria-label={`Remove ${t}`}
                  >
                    <HiOutlineXMark />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ',') {
                    e.preventDefault();
                    addTag();
                  }
                }}
                placeholder="Add a tag…"
                className="flex-1 px-4 py-2.5 rounded-xl border border-neutral-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all text-sm"
              />
              <button
                onClick={addTag}
                className="px-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Add tag"
              >
                <HiOutlinePlus />
              </button>
            </div>
          </Field>

          <Field label="Cover gradient">
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              {GRADIENT_PRESETS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGradient(g.id)}
                  title={g.label}
                  aria-label={g.label}
                  className={`aspect-square rounded-xl bg-gradient-to-br ${g.classes} ring-offset-2 transition-all hover:scale-105 ${
                    gradient === g.id ? 'ring-2 ring-emerald-500' : 'ring-0'
                  }`}
                />
              ))}
            </div>
          </Field>
        </div>

        {/* Validation panel (Sits right above markdown) */}
        {errors.length > 0 ? (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start gap-2 text-amber-900">
              <HiOutlineInformationCircle className="text-lg mt-0.5 flex-shrink-0" />
              <div className="text-sm space-y-1">
                <p className="font-semibold">Before publishing:</p>
                <ul className="space-y-0.5 list-disc pl-4">
                  {errors.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-start gap-2 text-emerald-900">
              <HiOutlineCheck className="text-lg mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold mb-0.5">Ready to publish</p>
                <p className="text-emerald-800">
                  Download the file, drop it in <code className="bg-white px-1 rounded text-xs">/content/blog/</code>, commit, push.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Markdown Editor & Preview Section */}
        <div className="min-w-0 flex flex-col">
          {/* Universal tabs for Mobile & Desktop to switch between Edit and Preview */}
          <div className="flex gap-2 mb-4 p-1 rounded-full bg-neutral-100 max-w-sm">
            <button
              onClick={() => setView('edit')}
              className={`flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium transition-all ${
                view === 'edit' ? 'bg-white shadow text-black' : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <HiOutlinePencilSquare className="text-lg" /> Edit
            </button>
            <button
              onClick={() => setView('preview')}
              className={`flex-1 inline-flex items-center justify-center gap-2 py-2 rounded-full text-sm font-medium transition-all ${
                view === 'preview' ? 'bg-white shadow text-black' : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <HiOutlineEye className="text-lg" /> Preview
            </button>
          </div>

          <div className="flex-1 w-full relative">
            {/* Editor View */}
            <div className={view === 'edit' ? 'block' : 'hidden'}>
              <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm">
                <div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50/50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                    <HiOutlinePencilSquare /> Markdown Editor
                  </span>
                  <span className="text-xs text-neutral-400">{wordCount} words</span>
                </div>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  spellCheck
                  className="w-full px-5 py-5 outline-none text-[15px] leading-relaxed font-mono resize-none min-h-[500px]"
                />
              </div>
            </div>

            {/* Preview View */}
            <div className={view === 'preview' ? 'block' : 'hidden'}>
              <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm">
                <div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50/50">
                  <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1.5">
                    <HiOutlineEye /> Live Preview
                  </span>
                </div>

                <div className="overflow-y-auto min-h-[500px]">
                  {/* Faux cover */}
                  <div className={`relative h-48 bg-gradient-to-br ${gradientClasses} overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute bottom-4 left-5 right-5 sm:left-8 sm:right-8">
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {tags.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium tracking-wide uppercase"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug line-clamp-2">
                        {title || 'Your title will appear here'}
                      </h2>
                    </div>
                  </div>

                  <div className="px-5 sm:px-8 py-8">
                    <div className="text-sm text-neutral-500 mb-6 flex items-center gap-3">
                      <span className="font-medium text-neutral-900">{author || 'Author'}</span>
                      <span>·</span>
                      <span>{date}</span>
                      <span>·</span>
                      <span>{readingTime} min read</span>
                    </div>

                    {description && (
                      <p className="text-lg text-neutral-600 leading-relaxed font-light mb-8 pb-8 border-b border-neutral-100">
                        {description}
                      </p>
                    )}

                    <div className="prose-techtonic prose sm:prose-lg max-w-none text-neutral-800">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MDX output snippet */}
          <details className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-950 text-neutral-100 overflow-hidden">
            <summary className="px-5 py-4 cursor-pointer text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-emerald-400 transition-colors select-none">
              View raw .mdx output
            </summary>
            <pre className="px-5 pb-5 text-xs overflow-x-auto leading-relaxed text-neutral-300">
              <code>{mdxOutput}</code>
            </pre>
          </details>

          {/* How-to */}
          <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2 text-neutral-900">
              <HiOutlineInformationCircle className="text-emerald-600 text-lg" />
              How publishing works
            </h3>
            <ol className="space-y-2.5 text-sm text-neutral-600 list-decimal pl-5">
              <li>Click <strong className="text-neutral-900">Download</strong> (or copy the MDX contents).</li>
              <li>Add the file to <code className="bg-white border border-neutral-200 px-1.5 py-0.5 rounded font-mono text-xs text-neutral-800">/content/blog/</code> in the repository.</li>
              <li>Commit &amp; push — Vercel automatically rebuilds and the post goes live in ~30 seconds.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, required, hint, children }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
          {label}
          {required && <span className="text-emerald-500 ml-1">*</span>}
        </label>
        {hint && <span className="text-[11px] font-medium text-neutral-400">{hint}</span>}
      </div>
      {children}
    </div>
  );
}