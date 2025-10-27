// Stockage temporaire en mémoire pour les fichiers PDF
// En production, remplacez par un service comme AWS S3, Cloudinary, ou Vercel Blob
export const tempStorage = new Map<string, Buffer>();
