import { useContext } from 'react'
import { PizzasContext } from '../../context/PizzaContext';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  const { limpiarElCarrito, total, pagar } = useContext(PizzasContext);

  return (
  <div className="bg-dark text-light p-3">
    <p className='fs-3 fw-bold'>Pizzería Mamma Mia</p>
    {total > 0 ? (
    <div>
      <p className='fs-5 fw-bold'>El total de su compra es: ${total.toLocaleString('cl-CL')}</p>
      <Button variant="success" onClick={() => pagar()}>Pagar</Button>
      <Button onClick={() => limpiarElCarrito()}>Limpiar el carrito</Button>
    </div>) : ('')}
  </div>
  )
}

export default Footer;