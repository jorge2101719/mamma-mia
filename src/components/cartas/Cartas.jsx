import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PizzasContext } from '../../context/PizzaContext';

import Button from 'react-bootstrap/Button';
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
        <Card style={{width: '23rem'}} className="p-0">
          <Card.Img src={ pizza.img } alt={ pizza.name } />
          <Card.Body>
            <Card.Title className='fw-bold fs-4 text-center'> {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)} </Card.Title>
            <Card.Text className='text-start'>
              <strong>Ingredientes:</strong>
            </Card.Text>
            { pizza.ingredients.map( (ingrediente, indice) => <Card.Text key={indice} className='text-start'>
              <img src='/pizza.png' alt='pizza' style={{width: '5%'}} className='mx-2' /> {ingrediente}
            </Card.Text> ) }
            <Card.Text className='fw-bold fs-4'>
              Precio: $ {pizza.price.toLocaleString('cl-CL')}
            </Card.Text>
            <Card.Footer className="botones">
              <Button className="btn btn-primary" onClick={ buscarPizza }>Ver más 👀</Button>              
              <Button className="btn btn-success" onClick={ () => agregarAlCarrito(pizza) }>Agregar 🛒</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      }
    </div>  
  )}