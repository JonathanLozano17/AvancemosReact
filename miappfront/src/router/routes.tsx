import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from '../App';
import Dashboard from '../pages/Dashboard';
import { Navigate, Outlet } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Prueba from "../pages/prueba";


// Componente de Ruta Privada
const PrivateRoute = () => {
  const token = localStorage.getItem('authToken');
  return token ? <Outlet /> : <Navigate to="/LandingPage" replace />;
};

// Componente principal de rutas
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de login pública */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/prueba" element={<Prueba />} />
        
        {/* Rutas protegidas */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Puedes agregar más rutas protegidas aquí */}
          {/* Ejemplo: <Route path="/profile" element={<Profile />} /> */}
        </Route>
        
        {/* Ruta por defecto */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Manejo de rutas no encontradas */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;