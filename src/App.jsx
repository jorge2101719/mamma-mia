import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PizzasContextProvider from './context/PizzaContext';

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

// Dejo a su disposición algunos sitios consultados para este trabajo:
// https://www.youtube.com/watch?v=F-3cvd10zHE (muy útil en la construcción de ciertas funciones que usé)
// https://www.youtube.com/watch?v=15PFRItzs4w
// https://loading.io/css/ (para efecto de espera)
// https://www.freecodecamp.org/espanol/news/como-poner-en-mayuscula-la-primera-letra-del-string-javascript/
// https://es.stackoverflow.com/questions/421511/formatear-input-number-con-separador-de-miles
// y otros que se me escapan en este momento

import PizzasNavbar from './components/PizzasNavbar/PizzasNavbar';
import Home from './views/home/Home';
import PizzaDetalle from './views/detalles/PizzaDetalle';
import Carrito from './views/Carrito';
import Error from './views/Error';

function App() {

  return (
    <>
      <BrowserRouter>
        <PizzasContextProvider>
          <PizzasNavbar />

          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaDetalle />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </PizzasContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
