# Le Match — Landing Vitrine (passion-connect-main)

Landing page qui présente **Le Match** : une application sociale basée sur les **passions / hobbies** pour découvrir, matcher et discuter (texte + vocal).

## Contenu de la landing
- **Navbar** : logo, ancres de navigation et CTA “Télécharger”
- **Hero** : promesse de valeur + mockup de l’app
- **Pourquoi Le Match ?** : bénéfices principaux
- **Comment ça marche ?** : 3 étapes simples
- **Fonctionnalités** :
  - Découverte par centres d’intérêt
  - Match & conversations
  - Feed & contenu (likes, commentaires, hashtags)
  - Tendances & hashtags
- **CTA final** : sections sombre/clair avec boutons d’action
- **FAQ** + **Footer**

## Design & couleurs
La landing s’appuie sur une palette cohérente avec l’application mobile.

Références côté code :
- `src/index.css` contient les variables CSS (cream, terracotta, slate, etc.)
- `tailwind.config.ts` expose ces couleurs via Tailwind

## Stack technique
- **Vite + React + TypeScript**
- **Tailwind CSS**
- **framer-motion** (animations)
- **lucide-react** (icônes)
- Composants type **Radix UI / shadcn** (selon la structure actuelle)

## Démarrer en local
```bash
cd passion-connect-main
npm install
npm run dev
```

## Build / Preview
```bash
npm run build
npm run preview
```

## Lint / Tests
```bash
npm run lint
npm test
```

## Déploiement (recommandé)
Après build, héberger sur :
- Vercel / Netlify (recommandé)
- GitHub Pages (si build statique)

Astuce : pense à mettre à jour dans `index.html` :
- le `title`
- la `meta name="description"`
- les `og:*` (si tu veux une preview partagée propre)
