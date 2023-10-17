import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/Card';
import { PizzasContext } from '../../context/PizzaContext'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import './detalleDeLaPizza.css';
import '../pizzaHome/Home';

const PizzaDetalle = () => {
  const { id } = useParams();
  const navigatePizza = useNavigate();
  const { pizzas, agregarAlCarrito } = useContext(PizzasContext);

  const encontrarPizza = pizzas.find(pizza => pizza.id === id);

  if(!encontrarPizza) {
    alert('no se encuentra en el menú')
  }
  
  const pizzaIndex = pizzas.findIndex(e => e.id === id)

  const detalleDeLaPizza = pizzas[pizzaIndex];

  return (
    <div>
      {detalleDeLaPizza ? <section className='detalles mt-5 pt-3'>
        <img src={detalleDeLaPizza.img} style={{width: '100%'}}></img>
        <div>
          <div className='h1'>{detalleDeLaPizza.name.charAt(0).toUpperCase() + detalleDeLaPizza.name.slice(1)}</div>
          <p className='description'>{detalleDeLaPizza.desc}</p>
          <strong>Ingredientes:</strong>
          <ul>
            { detalleDeLaPizza.ingredients.map( (ingrediente, indice) => <li key={indice}>{ingrediente}</li> ) }
          </ul>
          <section className='d-flex justify-content-around'>
            <p className='fs-1 fw-bold'>Precio: ${detalleDeLaPizza.price.toLocaleString('cl-CL')}</p>
            <p><Button className='btn btn-danger' onClick={() => agregarAlCarrito(detalleDeLaPizza)}>Agregar 🛒</Button></p>
            <p><Button className='btn btn-success' onClick={() => navigatePizza('/')}>Volver a 🏡</Button></p>
          </section>
        </div>
      </section>
       : 'no hay datos'}
    </div>
  )
}

export default PizzaDetalle;