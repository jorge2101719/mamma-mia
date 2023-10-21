import { useContext } from "react";

import { PizzasContext } from "../../context/PizzaContext";
import Cartas from '../../components/cartas/Cartas';
import Buscando from '../../components/buscando/Buscando';
import Footer from '../../components/footer/Footer';

import './Home.css';

const Home = () => {
  const { pizzas }  = useContext(PizzasContext);

  return (
    <div className="home">
      <header className="banner">
        <h1 className="fw-bold">¡Pizzería Mamma Mía!</h1>
        <p className="fw-bold fs-5">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </header>
      <section className="cards">
        { pizzas ? pizzas.map((pizza, index) => <Cartas key={index} pizza={pizza} />) : <Buscando />}
      </section>
      <Footer />
    </div>
  )
}

export default Home