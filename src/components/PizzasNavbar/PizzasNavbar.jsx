import { NavLink } from 'react-router-dom';

import '../../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PizzasNavbarStyle.css'

import { PizzasContext } from '../../context/PizzaContext';
import { useContext } from 'react';

const PizzasNavbar = () => {
  const { total } = useContext(PizzasContext);

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-actve");

  return (
    <div>
      <nav className="d-flex align-items-center justify-content-between p-3 navbar fixed-top bg-primary">
        <NavLink className={ setActiveClass } to="/">
          <img src='/icons8-pizza-65.png' style={{width: '2rem'}} />
          <span>Pizzaría Mamma Mia</span>
        </NavLink> 
        <NavLink className={ setActiveClass } to="/carrito">
          <img src='/carrito-de-compras.png' style={{width: '2rem'}} />
          <span className='totalCompra'> Carrito $ {total.toLocaleString('cl-CL')}</span>
        </NavLink>
      </nav>
    </div>
  )
}

export default PizzasNavbar