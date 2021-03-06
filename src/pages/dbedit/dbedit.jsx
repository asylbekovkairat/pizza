
import css from './dbedit.module.css'
const Dbedit = (props) => {

  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.imgwrapper}>
          <img src={props.image} />
        </div>
        <div className={css.name}>
          {props.name}
        </div>
        <div className={css.description}>
          {props.description}
        </div>
        <div className={css.footer}>
          <p сlassName={css.price}> от {props.price} сом</p>
          <button className={css.pizzabtn}>Edit</button>
        </div>
      </div>
    </div>

  );
}

export default Dbedit;
