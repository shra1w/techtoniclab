'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  HiOutlinePlus,
  HiOutlineArrowUpRight,
} from 'react-icons/hi2';
import { isAuthorized } from '@/libs/auth-gate';
import AuthDialog from '@/libs/AuthDialog';

const TARGET = '/blogs/add-new';

export default function NewBlogTrigger({ variant = 'nav' }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    if (isAuthorized()) {
      router.push(TARGET);
      return;
    }
    setOpen(true);
  }

  function handleSuccess() {
    setOpen(false);
    router.push(TARGET);
  }

  return (
    <>
      {variant === 'nav' && (
        <button
          onClick={handleClick}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30"
        >
          <HiOutlinePlus className="text-base transition-transform group-hover:rotate-90" />
          <span className="hidden sm:inline">New Blog</span>
        </button>
      )}

      {variant === 'card' && (
        <button
          onClick={handleClick}
          className="group block w-full relative overflow-hidden rounded-3xl border-2 border-dashed border-neutral-300 hover:border-emerald-500 transition-all duration-300 p-12 sm:p-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neutral-100 group-hover:bg-emerald-50 mb-6 transition-colors">
            <HiOutlinePlus className="text-3xl text-neutral-600 group-hover:text-emerald-600 transition-all group-hover:rotate-90 duration-300" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Have a story to publish?</h3>
          <p className="text-neutral-600 max-w-md mx-auto">
            Use the Techtonic editor to draft, preview, and publish a new blog post in minutes.
          </p>
          <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-emerald-600 underline-grow">
            Open the editor
            <HiOutlineArrowUpRight className="text-base" />
          </span>
        </button>
      )}

      {open && (
        <AuthDialog
          mode="modal"
          onClose={() => setOpen(false)}
          onSuccess={handleSuccess}
        />
      )}
    </>
  );
}