// App.py
// Created: 7/7/2026
// Last Edited: 7/8/2026
// Author: John Wesley Thompson

import './App.css';

import { Routes, Route } from "react-router-dom";

import ProtectedRoute from './ProtectedRoute';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route 
        path="/"
        element={
          <ProtectedRoute>
            <HomePage/>
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
    </Routes>
  )
}

export default App
