// Stockage des URLs des fichiers PDF uploadés
// En production, utilisez une vraie base de données
export const uploadedFiles = new Map<string, string>();

// Fonction pour obtenir l'URL d'un fichier uploadé
export function getUploadedFileUrl(filename: string): string | null {
  return uploadedFiles.get(filename) || null;
}

// Fonction pour stocker l'URL d'un fichier uploadé
export function setUploadedFileUrl(filename: string, url: string): void {
  uploadedFiles.set(filename, url);
}
