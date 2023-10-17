import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import './Carrito.css'

import { PizzasContext } from '../../context/PizzaContext';
import { useContext } from 'react';

export default function Carrito() {
  const { carrito, agregarAlCarrito, quitarDelCarrito, total, contador, limpiarElCarrito } = useContext(PizzasContext);

  const navigatePizza = useNavigate()

  const incrementar = (pizza) => {
    agregarAlCarrito(pizza);
  }

  const decrementar = (producto) => {
    quitarDelCarrito(producto.id);
  }

  return(
    <div className='mt-5 pt-5 estilo-carrito'>
    <Container style={{width: '100rem'}} className='justify-content-center'>
      {carrito.length > 0 ?  (
        <div className='text-light fs-5'>
          <Row className='mb-5'>
            <Col className='text-start fs-1 fw-bold'>Detalles del Pedido:</Col>
          </Row>
          {carrito.map((producto) => 
            <Row key={producto.id}>
              <Col xs={1} className='no-ver'><img src={producto.img} alt={producto.name} style={{width: '4rem'}} /></Col>
              <Col xs={3} className='text-start'>{producto.name.charAt(0).toUpperCase() + producto.name.slice(1)} </Col>
              <Col xs={1} className='no-ver'>{producto.cantidad}</Col>
              <Col xs={1} className='no-ver'>$ {producto.price.toLocaleString('cl-CL')} </Col>
              <Col xs={1} md={2} className='no-ver'>$ {(producto.cantidad * producto.price).toLocaleString('cl-CL')}</Col>
              <Col ><Button onClick={() => incrementar(producto)} className='btn btn-success'> + </Button></Col>
              <Col ><Button onClick={() => decrementar(producto)} className='btn btn-danger'> - </Button></Col>
            </Row>
          )}
        </div>
      ) : (
        <div>
          <p className='badge text-light text-center fs-1'>El carrito está vacío.</p>
          <p><Button onClick={() => navigatePizza('/')}>Volver a 🏡</Button></p>
        </div>
      )}
      <hr className='text-primary' />
      {carrito.length === 0 ? ('') : (
        <Row className='text-light fw-bold fs-4'>
          <Col>
            <img src='/public/pizza.png' style={{width: '2rem'}} className='no-ver' />
          </Col>
          <Col className='no-ver'>
            Total de productos
          </Col>
          <Col className='no-ver'>{contador}</Col>
          <Col className='no-ver'>Total a pagar</Col>
          <Col>$ {total.toLocaleString('cl-CL')}</Col>
          <Col>
            <Button onClick={() => limpiarElCarrito()} className='btn btn-success text-light'>Pagar</Button>
          </Col>
        </Row>
        )
      }
    </Container>
    </div>
  )
}