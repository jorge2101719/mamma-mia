import { useContext } from 'react'
import { PizzasContext } from '../../context/PizzaContext';
import Button from 'react-bootstrap/Button'

import Form from "react-bootstrap/Form";


const Footer = () => {
  const { limpiarElCarrito, total } = useContext(PizzasContext);
  return (
  <div className="bg-dark text-light p-3">
    <p className='fs-3 fw-bold'>Pizzería Mamma Mia</p>
    <p className='fs-5 fw-bold'>El total de su compra es: ${total.toLocaleString('cl-CL')}</p>
    <Button onClick={() => limpiarElCarrito()}>Limpiar</Button>
    <Form className='p-2'>
      <Form.Group className='m-2'>
        <Form.Label>Déjenos su comentario</Form.Label>
        <Form.Control as='textarea' rows={3} />
      </Form.Group>
    </Form>
  </div>
  )
}

export default Footer;