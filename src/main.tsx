import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import JuegoDetalle from './pages/JuegoDetalle';
import ConfirmarEmail from './pages/ConfirmarEmail.tsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import PagoCarrito from './pages/CarroCompras/PagoCarrito.tsx';
import EmailConfirm from './pages/ConfirmarEmail.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/confirmar" element={<ConfirmarEmail enviar={() => {}} />} />
        <Route path="/home" element={ <HomePage /> } />
        <Route path="/juego" element={<JuegoDetalle />} />
        <Route path="/carrito" element={<PagoCarrito />} />
        <Route path="/confirmar" element={<EmailConfirm enviar={() => {}} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)