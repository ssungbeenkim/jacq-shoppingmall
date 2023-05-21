import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotFound from './page/NotFound';
import Home from './page/Home';
import NewProduct from './page/NewProduct';
import MyCart from './page/MyCart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllProducts from './page/AllProducts';
import ProtectedRoute from './page/ProtectedRoute';
import ProductDetail from './page/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <AllProducts /> },
      {
        path: 'products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: 'carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
