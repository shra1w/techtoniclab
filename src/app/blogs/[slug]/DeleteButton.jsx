'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineTrash } from 'react-icons/hi2';
import AuthDialog from '@/libs/AuthDialog';
import { deletePostAction } from './actions';

export default function DeleteButton({ slug, title }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  async function handleVerified(key) {
    // Throws on failure; AuthDialog will catch and display the message.
    await deletePostAction(slug, key);
    // Brief delay so the success state of the dialog is visible.
    setTimeout(() => {
      setOpen(false);
      router.push('/blogs');
      router.refresh();
    }, 700);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Delete article"
        className="p-2 rounded-full text-neutral-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all"
        title="Delete article"
      >
        <HiOutlineTrash className="text-lg" />
      </button>

      {open && (
        <AuthDialog
          mode="modal"
          intent="danger"
          title="Delete this article?"
          description={`This permanently removes "${title}" from the site. Enter the access key to confirm. This cannot be undone.`}
          submitLabel="Delete article"
          onVerified={handleVerified}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}