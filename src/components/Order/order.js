import { Link } from "react-router-dom";
import css from "./order.module.css"

export const Order = (props) => {
  return(
    <div>
      <Link className={css.order} to="/">
        <img src={props.img} alt="#"/>
        <div className={css.cost}>
          <div> {props.name}</div>
            <div> {props.cost}</div>
        </div>
      </Link>
    </div>
  )
}