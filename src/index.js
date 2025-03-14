import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, Navigate } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from './pages/registerPage';
import { ChakraProvider, Toaster } from '@chakra-ui/react';
import { Provider } from './components/ui/provider';
import ClientsPage from './pages/clientsPage';
import AdminPage from './pages/adminPage';
import ParkingSlotsPage from './pages/parkingSlotsPage';

const router = createBrowserRouter([
  {
    path: "/clients",
    element: <ClientsPage />,
  },
  {
    path: "/parking-slots",
    element: <ParkingSlotsPage />,
  },
  {
    path: "/",
    element: <RegisterPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider >
    <RouterProvider router={router}>
      <Routes>
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/parking-slots" element={<ParkingSlotsPage />} />
        <Route path="/" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </RouterProvider>
  </Provider>
);

reportWebVitals();