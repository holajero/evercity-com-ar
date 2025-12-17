import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { App } from './App';
import { TerralbaPage } from '@/pages/TerralbaPage';
import { ContactPage } from '@/pages/ContactPage';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <RouteErrorBoundary />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        { 
            path: '/terralba', 
            element: <TerralbaPage />, 
            errorElement: <RouteErrorBoundary /> 
        },
        { 
            path: '/contact', 
            element: <ContactPage />, 
            errorElement: <RouteErrorBoundary /> 
        },
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)