import { useContext } from "react";

import { PizzasContext } from "../../context/PizzaContext";
import Cartas from '../../components/cartas/Cartas';
import Buscando from '../../components/buscando/Buscando';

import './Home.css';

const Home = () => {
  const { pizzas }  = useContext(PizzasContext);

  return (
    <div className="home">
      <header className="banner">
        <h1>¡Pizzería Mamma Mía!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </header>
      <section className="cards">
        { pizzas ? pizzas.map((pizza, index) => <Cartas key={index} pizza={pizza} />) : <Buscando />}
      </section>
    </div>
  )
}

export default Home