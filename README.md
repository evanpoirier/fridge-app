# 🥬 Frigo Anti-Gaspillage - Progressive Web App

Application mobile-first de gestion de frigo pour éviter le gaspillage alimentaire. Scannez votre ticket de caisse, l'IA fait le reste !

## 🎯 Concept

L'utilisateur rentre de courses, prend 1 photo de son ticket de caisse. L'app analyse le ticket avec Claude Vision API, extrait automatiquement tous les produits alimentaires, pose 2-3 questions rapides pour les produits ambigus (ex: champignons frais vs conserve), puis attribue automatiquement des dates de péremption pessimistes selon les catégories. L'utilisateur reçoit des notifications avant que les produits expirent.

## 🚀 Stack Technique

- **React** avec Vite (plus rapide que Create React App)
- **PWA** (Progressive Web App) pour accès caméra mobile
- **Claude Vision API** (Anthropic) pour OCR du ticket
- **Firebase** (Firestore + Cloud Messaging) pour stockage et notifications
- **Design mobile-first**, responsive

## ✨ Features MVP

1. ✅ Page d'accueil avec bouton "📸 Scanner mon ticket"
2. 🚧 Accès caméra pour prendre photo du ticket
3. 🚧 Envoi de la photo à Claude Vision API avec prompt structuré
4. 🚧 Écran de questions rapides pour produits ambigus
5. ✅ Attribution automatique dates pessimistes (système de données prêt)
6. 🚧 Page inventaire : liste produits triés par date
7. 🚧 Système de notifications 2 jours avant expiration
8. 🚧 Bouton "Consommé" pour retirer un produit

## 📅 Dates de Péremption Pessimistes

Le système utilise des dates conservatrices pour éviter tout gaspillage :

- **Lait** : 5 jours
- **Yaourt** : 18 jours
- **Viande rouge** : 2 jours
- **Viande hachée** : 1 jour
- **Poulet** : 2 jours
- **Poisson** : 1 jour
- **Salade/légumes verts** : 4 jours
- **Légumes** : 7 jours
- **Fruits** : 5 jours
- **Œufs** : 21 jours
- **Fromage frais** : 7 jours
- **Surgelés** : 90 jours
- **Conserves** : 730 jours

## 🎨 Flow Utilisateur

1. Utilisateur clique "Scanner ticket"
2. Prend photo du ticket
3. Loading "Analyse en cours..."
4. Affichage "15 produits détectés, 3 nécessitent précision"
5. Questions rapides avec icônes (🥗 Frais / 🥫 Conserve / ❄️ Surgelé)
6. "✅ 15 produits ajoutés ! Frigo (7), Congélateur (3), Placard (5)"
7. Redirection vers inventaire

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env` à la racine :

```env
# Claude API
VITE_ANTHROPIC_API_KEY=your_api_key_here

# Firebase
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your_app_id
```

## 📂 Structure du Projet

```
fridge-app/
├── public/              # Assets statiques
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Button.jsx
│   │   └── Layout.jsx
│   ├── pages/          # Pages de l'application
│   │   └── HomePage.jsx
│   ├── services/       # Services (API, Firebase)
│   ├── utils/          # Fonctions utilitaires
│   ├── hooks/          # Custom React hooks
│   ├── config/         # Configuration
│   ├── data/           # Données statiques
│   │   └── expirationDates.js
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js      # Configuration Vite + PWA
└── package.json
```

## 🔜 Prochaines Étapes

1. Implémenter l'accès caméra et capture photo
2. Intégrer Claude Vision API pour OCR
3. Créer le système de questions pour produits ambigus
4. Développer la page inventaire
5. Configurer Firebase et notifications push
6. Ajouter la persistance des données

## 🤝 Contribution

Ce projet est en cours de développement. Les contributions sont les bienvenues !

## 📄 Licence

MIT
