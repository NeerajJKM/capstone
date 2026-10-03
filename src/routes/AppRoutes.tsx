import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../components/layout/MainLayout';
import PageLoader from '../components/feedback/PageLoader';

const CatalogPage = lazy(() => import('./CatalogPage'));
const ProductDetailPage = lazy(() => import('./ProductDetailPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/products" replace />} />
          <Route
            path="products"
            element={
              <Suspense fallback={<PageLoader />}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path="products/:id"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductDetailPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
