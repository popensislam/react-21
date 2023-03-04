import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { routesV6 } from './common/routeConfig';
import ErrorBoundary from './ErrorBoundary';
import StoreProvider from './store/StoreProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={routesV6}/> */}
    <ErrorBoundary>
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
