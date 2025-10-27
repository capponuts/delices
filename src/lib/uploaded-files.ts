// Stockage des URLs des fichiers PDF uploadés
// Utilise les variables d'environnement pour la persistance
export const uploadedFiles = new Map<string, string>();

// Initialiser avec les variables d'environnement si disponibles
if (typeof process !== 'undefined') {
  const equilibreUrl = process.env.UPLOADED_MENU_EQUILIBRE_URL;
  const traiteurUrl = process.env.UPLOADED_MENU_TRAITEUR_URL;
  
  if (equilibreUrl) {
    uploadedFiles.set("menu-equilibre.pdf", equilibreUrl);
  }
  if (traiteurUrl) {
    uploadedFiles.set("menu-traiteur.pdf", traiteurUrl);
  }
}

// Fonction pour obtenir l'URL d'un fichier uploadé
export function getUploadedFileUrl(filename: string): string | null {
  return uploadedFiles.get(filename) || null;
}

// Fonction pour stocker l'URL d'un fichier uploadé
export function setUploadedFileUrl(filename: string, url: string): void {
  uploadedFiles.set(filename, url);
  
  // En production, vous pourriez sauvegarder ces URLs dans une base de données
  // Pour l'instant, on les garde en mémoire (perdu au redémarrage)
  console.log(`Fichier ${filename} uploadé vers: ${url}`);
}
