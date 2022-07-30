import css from "./PizzaCard.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPizzaAC } from "./../../redux/actions/basketActions";

const Pizzacard = (props) => {
  const dispatch = useDispatch();

  const basketData = useSelector((state) => state.basket.data);

  const onSelect = () => {
    if (!basketData.find((pizza) => pizza.id === props.id)) {
      dispatch(addPizzaAC([...basketData, props]));
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.imgwrapper}>
        <img className={css.cardimg} src={props.image}  alt="#"/>
      </div>
      <div className={css.name}>{props.name}</div>
      <div className={css.description}>{props.description}</div>
      <div className={css.footer}>
        <p сlassName={css.price}> от {props.price} сом</p>
        <button className={css.pizzabtn} onClick={onSelect}>
          выбрать
        </button>
      </div>
    </div>
  );
};

export default Pizzacard;
