import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PizzasContext } from '../../context/PizzaContext';

import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cartas({ pizza }) {
  const navigatePizza = useNavigate();
  const { agregarAlCarrito } = useContext(PizzasContext);

  const buscarPizza = () => {
    navigatePizza(`/pizza/${pizza.id}`);
  }

  return (
    <div className='cartas'>
      {
        <Card style={{width: '22rem'}} className="p-0">
          <Card.Img src={ pizza.img } alt={ pizza.name } />
          <Card.Body>
            <Card.Title className='fw-bold fs-4 text-center'> {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)} </Card.Title>
            <Card.Text className='text-start'>
              <strong>Ingredientes:</strong>
            </Card.Text>
            { pizza.ingredients.map( (ingrediente, indice) => <Card.Text key={indice} className='text-start'>
              <img src='/public/pizza.png' alt='pizza' style={{width: '5%'}} /> {ingrediente}
            </Card.Text> ) }
            <Card.Text className='fw-bold fs-4'>
              Precio: $ {pizza.price.toLocaleString('cl-CL')}
            </Card.Text>
            <Card.Footer className="botones">
              <button className="bg-primary" onClick={ buscarPizza }>Ver más</button>              
              <button className="bg-danger" onClick={ () => agregarAlCarrito(pizza) }>Agregar</button>
            </Card.Footer>
          </Card.Body>
        </Card>
      }
    </div>  
  )}