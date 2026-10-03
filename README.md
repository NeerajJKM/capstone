# Apex Goods - Capstone E-Commerce Catalog Application

A production-grade, modular frontend e-commerce catalog engineered with React 18, TypeScript, Tailwind CSS, and Vite.

## Architecture Highlights
- **Client-Side Routing**: Handled seamlessly via `react-router-dom` with code-splitting (`React.lazy` + `Suspense`).
- **State Management**: Zero-dependency decoupled cart context persisted to `localStorage`.
- **Performance Optimized**: Vite chunking separating vendor assets, dynamic imports, responsive layouts, and SVG icon tree-shaking.
- **Production Ready**: Contains pre-configured single-page application (SPA) rewrites for Vercel (`vercel.json`) and Netlify (`public/_redirects`).

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Deployment Instructions

### Deploy to Vercel
1. Push this repository to GitHub/GitLab.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the repository.
4. Keep the default Vite settings (`Build command: npm run build`, `Output directory: dist`).
5. Click **Deploy**. Vercel will automatically detect `vercel.json` for SPA rewrites.

### Deploy to Netlify
1. Connect your repository to Netlify.
2. Set the build command to `npm run build` and publish directory to `dist`.
3. Netlify will consume `public/_redirects` to route all page requests back to `index.html`.
