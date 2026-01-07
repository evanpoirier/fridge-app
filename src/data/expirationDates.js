/**
 * Dates de péremption pessimistes par catégorie (en jours)
 * Ces durées sont volontairement conservatrices pour éviter le gaspillage
 */

export const EXPIRATION_DAYS = {
  // Produits laitiers
  LAIT: 5,
  YAOURT: 18,
  FROMAGE_FRAIS: 7,

  // Viandes
  VIANDE_ROUGE: 2,
  VIANDE_HACHEE: 1,
  POULET: 2,
  POISSON: 1,

  // Légumes et fruits
  SALADE: 4,
  LEGUMES_VERTS: 4,
  LEGUMES: 7,
  FRUITS: 5,

  // Autres
  OEUFS: 21,
  SURGELES: 90,
  CONSERVES: 730,

  // Catégorie par défaut
  DEFAULT: 7
};

/**
 * Mapping des mots-clés vers les catégories
 * Permet de détecter automatiquement la catégorie d'un produit
 */
export const CATEGORY_KEYWORDS = {
  LAIT: ['lait', 'milk'],
  YAOURT: ['yaourt', 'yogurt', 'fromage blanc'],
  FROMAGE_FRAIS: ['fromage frais', 'ricotta', 'mascarpone', 'philadelphia'],

  VIANDE_ROUGE: ['boeuf', 'veau', 'agneau', 'steak', 'côte', 'rôti'],
  VIANDE_HACHEE: ['haché', 'hachée', 'viande hachée', 'steak haché'],
  POULET: ['poulet', 'volaille', 'dinde', 'blanc de poulet'],
  POISSON: ['poisson', 'saumon', 'cabillaud', 'truite', 'thon frais', 'colin'],

  SALADE: ['salade', 'laitue', 'mâche', 'roquette', 'mesclun'],
  LEGUMES_VERTS: ['épinards', 'haricots verts', 'courgette', 'brocoli'],
  LEGUMES: ['tomate', 'carotte', 'poivron', 'concombre', 'oignon', 'poireau'],
  FRUITS: ['pomme', 'poire', 'banane', 'orange', 'fraise', 'raisin'],

  OEUFS: ['oeuf', 'oeufs', 'œuf', 'œufs'],
  SURGELES: ['surgelé', 'surgelés', 'congelé', 'congelés', 'glace'],
  CONSERVES: ['conserve', 'boîte', 'bocal', 'pot']
};

/**
 * Questions à poser pour les produits ambigus
 */
export const AMBIGUOUS_PRODUCTS = {
  champignon: {
    question: 'Champignons : frais, conserve ou surgelés ?',
    options: [
      { label: '🥗 Frais', category: 'LEGUMES', emoji: '🥗' },
      { label: '🥫 Conserve', category: 'CONSERVES', emoji: '🥫' },
      { label: '❄️ Surgelés', category: 'SURGELES', emoji: '❄️' }
    ]
  },
  haricot: {
    question: 'Haricots : frais, conserve ou surgelés ?',
    options: [
      { label: '🥗 Frais', category: 'LEGUMES_VERTS', emoji: '🥗' },
      { label: '🥫 Conserve', category: 'CONSERVES', emoji: '🥫' },
      { label: '❄️ Surgelés', category: 'SURGELES', emoji: '❄️' }
    ]
  },
  tomate: {
    question: 'Tomates : fraîches ou conserve ?',
    options: [
      { label: '🥗 Fraîches', category: 'LEGUMES', emoji: '🥗' },
      { label: '🥫 Conserve', category: 'CONSERVES', emoji: '🥫' }
    ]
  },
  petit: {
    question: 'Petits pois : frais, conserve ou surgelés ?',
    options: [
      { label: '🥗 Frais', category: 'LEGUMES', emoji: '🥗' },
      { label: '🥫 Conserve', category: 'CONSERVES', emoji: '🥫' },
      { label: '❄️ Surgelés', category: 'SURGELES', emoji: '❄️' }
    ]
  }
};

/**
 * Détermine la catégorie d'un produit basé sur son nom
 * @param {string} productName - Nom du produit
 * @returns {string|null} - Catégorie détectée ou null
 */
export function detectCategory(productName) {
  const normalizedName = productName.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    if (keywords.some(keyword => normalizedName.includes(keyword))) {
      return category;
    }
  }

  return null;
}

/**
 * Obtient le nombre de jours avant expiration pour une catégorie
 * @param {string} category - Catégorie du produit
 * @returns {number} - Nombre de jours
 */
export function getExpirationDays(category) {
  return EXPIRATION_DAYS[category] || EXPIRATION_DAYS.DEFAULT;
}

/**
 * Vérifie si un produit est ambigu et nécessite une question
 * @param {string} productName - Nom du produit
 * @returns {object|null} - Configuration de la question ou null
 */
export function isAmbiguousProduct(productName) {
  const normalizedName = productName.toLowerCase();

  for (const [key, config] of Object.entries(AMBIGUOUS_PRODUCTS)) {
    if (normalizedName.includes(key)) {
      return { key, ...config };
    }
  }

  return null;
}

/**
 * Catégorise les produits par lieu de stockage
 * @param {string} category - Catégorie du produit
 * @returns {string} - Lieu de stockage (frigo, congélateur, placard)
 */
export function getStorageLocation(category) {
  if (['SURGELES'].includes(category)) {
    return 'congélateur';
  }

  if (['CONSERVES'].includes(category)) {
    return 'placard';
  }

  return 'frigo';
}
