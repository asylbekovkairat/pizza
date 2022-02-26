import { Link } from "react-router-dom";
import css from "./order.module.css"

export const Order = (props) => {
  return(
    <div>
      <Link className={css.order}>
        <img src={props.img}/>
        <div className={css.cost}>
          <div> {props.name}</div>
            <div> {props.cost}</div>
        </div>
      </Link>
    </div>
  )
}