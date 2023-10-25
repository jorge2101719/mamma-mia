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
  const { carrito, agregarAlCarrito, quitarDelCarrito, total, contador, limpiarElCarrito, pagar } = useContext(PizzasContext);

  const navigatePizza = useNavigate()

  const incrementar = (pizza) => {
    agregarAlCarrito(pizza);
  }

  const decrementar = (producto) => {
    quitarDelCarrito(producto.id);
  }

  return(
    <div className='mt-5 pt-5 estilo-carrito'>
    {carrito ? (
      <Container style={{width: '100rem'}} className='justify-content-center'>
        {carrito.length > 0 ?  (
          <div className='text-light fs-5'>
            <Row className='mb-5'>
              <Col className='text-start fs-1 fw-bold'>Detalles del Pedido:</Col>
            </Row>
            {carrito.map((producto) => 
              <Row key={producto.id}>
                <Col xs={1} className='no-ver'>
                  <img src={producto.img} alt={producto.name} style={{width: '4rem'}} />
                </Col>
                <Col xs={3} className='text-start'>
                  {producto.name.charAt(0).toUpperCase() + producto.name.slice(1)}
                </Col>
                <Col xs={1} className='no-ver'>
                  {producto.cantidad}
                </Col>
                <Col xs={1} className='no-ver text-end'>
                  $ {producto.price.toLocaleString('cl-CL')}
                </Col>
                <Col xs={1} md={2} className='no-ver text-end'>
                  $ {(producto.cantidad * producto.price).toLocaleString('cl-CL')}
                </Col>
                <Col ><Button onClick={() => incrementar(producto)} className='btn btn-success'> + </Button></Col>
                <Col ><Button onClick={() => decrementar(producto)} className='btn btn-danger'> - </Button></Col>
              </Row>
            )
            }
          </div>
        ) : (
          <div>
            <div className='titular-carrito'>
              <p className='badge text-light text-center fs-1'>Pizzería Mamma Mia</p>
              <p className='badge text-light text-center fs-5'>¡Tenemos las mejores de la cuidad!</p>
            </div>
            <p><Button onClick={() => navigatePizza('/')} className='btn btn-primary fs-4'>Volver a 🏡</Button></p>
          </div>
        )}
        <hr className='text-primary' />
        {carrito.length === 0 ? ('') : (
          <Row className='text-light fw-bold fs-4'>
            <Col className='no-ver'>
              Productos
            </Col>
            <Col className='no-ver'>{contador}</Col>
            <Col className='no-ver'>Total a pagar</Col>
            <Col><span className='no-ver'>$</span> {total.toLocaleString('cl-CL')}</Col>
            <Col>
              <Button onClick={() => pagar()} className='btn btn-success text-light'>Pagar</Button>
            </Col>
            <Col>
              <Button variant='danger' onClick={() => limpiarElCarrito()}>Limpiar</Button>
            </Col>
          </Row>
          )
        }
      </Container>) : (undefined)
    }
    </div>
  )
}