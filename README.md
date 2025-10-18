# E-Portfolio (React + Vite)

Minimal, rapide et prêt pour GitHub Pages.

## Développement
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

## Déploiement (GitHub Pages via Actions)
1. Crée un repo GitHub **e-portfolio-react** (ou autre).
2. Pousse ce code sur la branche `main`.
3. Dans `Settings › Pages`, choisis **GitHub Actions** comme source.
4. Push sur `main` => la CI construit et publie automatiquement.

> Astuce : le base path est dérivé du nom du repo via `vite.config.js`.
> Si tu déploies ailleurs (domaine custom), mets `base: '/'`.
