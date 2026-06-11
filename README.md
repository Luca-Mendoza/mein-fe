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

## Deploy

Deploys are handled by GitHub Actions on pushes to `main`. Manual deploy is also available:

```bash
npx ng deploy --cname=lucadmendoza.dev --base-href="/"
```

## Author

Luca D. Mendoza · [LinkedIn](https://www.linkedin.com/in/luca-d-mendoza-470575180/) · [GitHub](https://github.com/Luca-Mendoza)
