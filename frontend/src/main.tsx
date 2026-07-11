// main.tsx
// Created: 7/7/2026
// Last Edited: 7/7/2026
// Author: John Wesley Thompson

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css'

import { AuthProvider } from './AuthContext.tsx';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter> 
  </StrictMode>
)
