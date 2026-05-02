'use server';

import crypto from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { deletePostBySlug } from '@/libs/blog';

const DEFAULT_HASH =
  '6495af36ca091f4bdf78ea8edefda81736846d18ac0a936c227d8dbf878af0f6';
const EXPECTED_HASH = (
  process.env.NEXT_PUBLIC_BLOG_AUTHOR_KEY_HASH || DEFAULT_HASH
).toLowerCase();

/**
 * Server action: deletes a post file from disk after verifying the key
 * server-side. Throws on any failure so the dialog displays the message.
 *
 * Note: on Vercel production the filesystem is read-only — this action
 * succeeds in dev only. For prod, deletion is done via Git commit.
 */
export async function deletePostAction(slug, key) {
  if (typeof slug !== 'string' || !/^[a-z0-9-]+$/i.test(slug)) {
    throw new Error('Invalid slug');
  }
  if (typeof key !== 'string' || key.length === 0) {
    throw new Error('Invalid key');
  }

  const hash = crypto.createHash('sha256').update(key).digest('hex').toLowerCase();
  if (hash !== EXPECTED_HASH) {
    throw new Error('Unauthorized');
  }

  deletePostBySlug(slug);

  revalidatePath('/blogs');
  revalidatePath(`/blogs/${slug}`);

  return { ok: true };
}