# Luca D. Mendoza — Personal Portfolio

> Live: [lucadmendoza.dev](https://lucadmendoza.dev) · Angular 17 · SSR · GitHub Pages

Personal portfolio for Luca D. Mendoza, Senior Front-End Engineer specialized in Angular and production-grade web applications.

## Stack

- Framework: Angular 17 with SSR/prerender
- UI: Angular Material, Tailwind CSS, SCSS
- Language: TypeScript
- Reactive layer: RxJS
- i18n: custom ES/EN translation service
- Deployment: GitHub Pages with custom domain

## Project Structure

```text
src/app/
  core/              Services and portfolio data
  public/
    components/      Public UI components
    pages/           Home, voice, details and error pages
  shared/            Pipes, animations, Material and Lucide modules
```

## Local Development

```bash
npm install
npm start
```

The app runs at `http://localhost:4200`.

## Build

```bash
npm run build
```

The build outputs to `dist/main-fe/browser` and creates `404.html` for GitHub Pages path routing.

## Build & Deployment (GitHub Pages)

### Automático (Recomendado via CI/CD)
El proyecto utiliza **GitHub Actions** (`.github/workflows/deploy.yml`). Cada vez que haces un `push` a la rama `main`, la aplicación se compila y publica automáticamente en **GitHub Pages** en [lucadmendoza.dev](https://lucadmendoza.dev).

```bash
# 1. Fusionar cambios a main
git checkout main
git merge tu-rama-de-trabajo

# 2. Subir a GitHub usando tu host/SSH configurado (ej: github-personal)
git push upstream main
```

### Manual (Vía Angular CLI / angular-cli-ghpages)
Si deseas realizar un despliegue manual a la rama `gh-pages` sin esperar a GitHub Actions:

```bash
# Compilar proyecto y publicar los archivos generados en dist/main-fe/browser a la rama gh-pages
npm run build
npx ngh --dir=dist/main-fe/browser --cname=lucadmendoza.dev --repo=git@github-personal:Luca-Mendoza/mein-fe.git
```

## Author

Luca D. Mendoza · [LinkedIn](https://www.linkedin.com/in/luca-d-mendoza-470575180/) · [GitHub](https://github.com/Luca-Mendoza)
