'use server';

import { env } from '@/env';
import { prisma } from '@repo/db';
import { uploadImage, uploadVideo } from '@repo/storage';

interface UploadActionProps {
  file: File;
  adminId: string;
  isPublic: boolean;
}

export async function uploadImageAction({
  file,
  adminId,
  isPublic,
}: UploadActionProps) {
  const { key, size } = await uploadImage({
    file,
    bucketName: env.STORAGE_BUCKET_NAME,
    isPublic,
  });

  return prisma.file.create({
    data: { key, size, type: 'Image', adminId },
  });
}

export async function uploadVideoAction({
  file,
  adminId,
  isPublic,
}: UploadActionProps) {
  const { key, size } = await uploadVideo({
    file,
    bucketName: env.STORAGE_BUCKET_NAME,
    isPublic,
  });

  return prisma.file.create({
    data: { key, size, type: 'Video', adminId },
  });
}
