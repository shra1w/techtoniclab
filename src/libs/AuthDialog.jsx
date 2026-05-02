'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineXMark,
  HiOutlineCheck,
  HiOutlineArrowRight,
  HiOutlineArrowLeft,
  HiOutlineExclamationTriangle,
} from 'react-icons/hi2';
import { grantAccess, verifyKey } from '@/libs/auth-gate';

export default function AuthDialog({
  mode = 'modal',
  intent = 'default',
  title,
  description,
  submitLabel,
  onSuccess,
  onClose,
  onVerified,
}) {
  const [key, setKey] = useState('');
  const [reveal, setReveal] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | verifying | error | success
  const [remoteError, setRemoteError] = useState(null);
  const [shake, setShake] = useState(0);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef(null);

  const isDanger = intent === 'danger';
  const accent = isDanger ? 'red' : 'emerald';

  const finalTitle =
    title || (status === 'success' ? 'Access granted' : 'Authorization required');
  const finalDescription =
    description ||
    (status === 'success'
      ? 'Redirecting you to the editor…'
      : 'Enter the access key to publish a new article. Contact the site owner if you don\u2019t have one.');
  const finalSubmitLabel = submitLabel || 'Verify';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (mode !== 'modal') return;
    function onKey(e) {
      if (e.key === 'Escape') onClose?.();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mode, onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  async function handleSubmit(e) {
    e?.preventDefault();
    if (!key.trim() || status === 'verifying') return;

    setStatus('verifying');
    setRemoteError(null);

    const ok = await verifyKey(key);
    if (!ok) {
      setStatus('error');
      setShake((s) => s + 1);
      setKey('');
      inputRef.current?.focus();
      return;
    }

    if (typeof onVerified === 'function') {
      try {
        await onVerified(key);
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setShake((s) => s + 1);
        setRemoteError(err?.message || 'Action failed');
      }
      return;
    }

    grantAccess();
    setStatus('success');
    setTimeout(() => onSuccess?.(), 600);
  }

  const accentRing = isDanger
    ? 'focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-500/10'
    : 'focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10';

  const submitBtnClasses = isDanger
    ? 'bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30'
    : 'bg-black hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30';

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-dialog-title"
      className={`relative w-full max-w-md rounded-3xl border border-neutral-200 bg-white shadow-2xl overflow-hidden ${
        shake ? 'animate-[shake_0.4s_ease-in-out]' : ''
      }`}
      key={shake}
    >
      {mode === 'modal' && (
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-all"
        >
          <HiOutlineXMark className="text-lg" />
        </button>
      )}

      <div
        className={`h-1 bg-gradient-to-r ${
          isDanger
            ? 'from-red-400 via-red-500 to-red-700'
            : 'from-emerald-400 via-emerald-500 to-emerald-700'
        }`}
      />

      <div className="p-8 sm:p-10">
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-colors duration-300 ${
            status === 'success'
              ? `bg-${accent}-500 text-white`
              : status === 'error'
              ? 'bg-red-50 text-red-600'
              : isDanger
              ? 'bg-red-50 text-red-600'
              : 'bg-emerald-50 text-emerald-600'
          }`}
        >
          {status === 'success' ? (
            <HiOutlineCheck className="text-2xl" />
          ) : isDanger ? (
            <HiOutlineExclamationTriangle className="text-2xl" />
          ) : (
            <HiOutlineLockClosed className="text-2xl" />
          )}
        </div>

        <h2
          id="auth-dialog-title"
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-2"
        >
          {finalTitle}
        </h2>
        <p className="text-sm text-neutral-500 leading-relaxed mb-6">{finalDescription}</p>

        <form onSubmit={handleSubmit}>
          <div
            className={`relative flex items-center rounded-xl border-2 transition-all ${
              status === 'error'
                ? 'border-red-300 focus-within:border-red-500 focus-within:ring-4 focus-within:ring-red-500/10'
                : `border-neutral-200 ${accentRing}`
            }`}
          >
            <input
              ref={inputRef}
              type={reveal ? 'text' : 'password'}
              value={key}
              onChange={(e) => {
                setKey(e.target.value);
                if (status === 'error') {
                  setStatus('idle');
                  setRemoteError(null);
                }
              }}
              disabled={status === 'verifying' || status === 'success'}
              placeholder="Access key"
              autoComplete="off"
              spellCheck={false}
              className="flex-1 px-4 py-3.5 bg-transparent border border-zinc-400 rounded-md outline-none text-base font-medium tracking-wide disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setReveal((r) => !r)}
              tabIndex={-1}
              aria-label={reveal ? 'Hide key' : 'Show key'}
              className="px-3 text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              {reveal ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
            </button>
          </div>

          {status === 'error' && (
            <p className="mt-3 text-sm text-red-600 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-red-500" />
              {remoteError || 'Invalid key. Try again.'}
            </p>
          )}

          <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3">
            {mode === 'modal' && (
              <button
                type="button"
                onClick={onClose}
                disabled={status === 'verifying' || status === 'success'}
                className="flex-1 px-5 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm font-medium transition-all disabled:opacity-50"
              >
                Cancel
              </button>
            )}
            {mode === 'page' && (
              <Link
                href="/blogs"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm font-medium transition-all"
              >
                <HiOutlineArrowLeft />
                Back to blogs
              </Link>
            )}
            <button
              type="submit"
              disabled={!key.trim() || status === 'verifying' || status === 'success'}
              className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed ${submitBtnClasses}`}
            >
              {status === 'verifying' ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {isDanger ? 'Deleting' : 'Verifying'}
                </>
              ) : status === 'success' ? (
                <>
                  <HiOutlineCheck className="text-base" />
                  {isDanger ? 'Deleted' : 'Authorized'}
                </>
              ) : (
                <>
                  {finalSubmitLabel}
                  <HiOutlineArrowRight className="text-base" />
                </>
              )}
            </button>
          </div>
        </form>

        <p className="mt-6 text-[11px] text-neutral-400 leading-relaxed">
          Your key is hashed locally and only stored in this tab&rsquo;s session. Closing the tab clears access.
        </p>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
      `}</style>
    </div>
  );

  // Page mode — full-screen lockout. Renders directly (it's the page itself).
  if (mode === 'page') {
    return (
      <main className="fixed inset-0 z-[100] min-h-screen bg-white flex items-center justify-center px-5 py-10 overflow-y-auto">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative w-full max-w-md animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)] my-auto">
          {dialog}
        </div>
      </main>
    );
  }

  // Modal mode — portal to <body> to escape any parent's backdrop-filter /
  // transform / filter, which would otherwise hijack `position: fixed`.
  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] text-black flex items-start sm:items-center justify-center px-5 py-10 overflow-y-auto animate-[fadeIn_0.2s_ease-out]">
      <button
        onClick={onClose}
        aria-label="Close dialog"
        className="fixed inset-0 bg-black/40 backdrop-blur-md cursor-default"
      />
      <div className="relative w-full max-w-md my-auto animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        {dialog}
      </div>
    </div>,
    document.body,
  );
}