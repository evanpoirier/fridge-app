# 🚀 Guide de Déploiement - Frigo Anti-Gaspillage

## ⚠️ Problème de Tunnel
L'environnement Claude Code Web a des restrictions réseau qui empêchent la création de tunnels publics (localtunnel, ngrok, etc.).

## ✅ Solution : Déploiement Manuel sur Netlify Drop

### Méthode 1 : Netlify Drop (Le plus simple !)

1. **Téléchargez l'archive** :
   - Fichier : `frigo-app-build.zip` (71 KB)
   - Ou : `frigo-app-build.tar.gz` (69 KB)

2. **Allez sur Netlify Drop** :
   - URL : https://app.netlify.com/drop
   - Aucune inscription nécessaire pour tester

3. **Drag & Drop** :
   - Extrayez le contenu de `frigo-app-build.zip`
   - Faites glisser le **dossier `dist`** (pas le ZIP) sur la zone Netlify Drop
   - Ou glissez directement tous les fichiers du dossier dist

4. **C'est en ligne !** :
   - Netlify génère automatiquement une URL publique
   - Format : `https://random-name-123456.netlify.app`
   - L'application est immédiatement accessible

### Méthode 2 : Vercel (Nécessite un compte)

1. **Installez Vercel CLI** (déjà fait) :
   ```bash
   npm install -g vercel
   ```

2. **Connectez-vous** :
   ```bash
   vercel login
   ```

3. **Déployez** :
   ```bash
   cd /home/user/fridge-app
   vercel --prod
   ```

### Méthode 3 : GitHub Pages

1. **Créez un repo GitHub** pour le projet

2. **Ajoutez dans `vite.config.js`** :
   ```js
   export default defineConfig({
     base: '/nom-du-repo/',
     // ... reste de la config
   })
   ```

3. **Déployez** :
   ```bash
   npm run build
   git add dist -f
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix dist origin gh-pages
   ```

## 📦 Contenu du Build

Le build contient :
- `index.html` - Page principale
- `assets/` - CSS et JavaScript optimisés
- `manifest.webmanifest` - Configuration PWA
- `sw.js` - Service Worker pour mode offline
- `registerSW.js` - Script d'enregistrement du SW

## 🔧 Build en Local

Si vous voulez rebuilder :

```bash
npm run build
```

Le build sera dans le dossier `dist/`.

## 📊 Statistiques du Build

- **Taille totale** : ~200 KB (gzippé : ~62 KB)
- **Fichiers** : 6 fichiers + assets
- **Format** : SPA (Single Page Application)
- **PWA** : ✅ Service Worker inclus

## 🌐 Test en Local

Pour tester le build localement :

```bash
npm run preview
```

Ou avec serve :

```bash
npx serve -s dist
```

## ⚡ Déploiement Rapide Recommandé

**👉 Netlify Drop est la solution la plus rapide** :
1. Pas de compte requis
2. Drag & drop en 10 secondes
3. URL publique instantanée
4. HTTPS automatique
5. CDN mondial gratuit

URL : https://app.netlify.com/drop
