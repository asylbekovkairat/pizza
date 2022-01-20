import css from './PizzaCard.module.css'

const Pizzacard = (props) => {
    const onSelect = () => {
        const basket = JSON.parse(localStorage.getItem("basket")) || []
        if (!basket.includes(props.id)) {
            basket.push(props.id)
            localStorage.setItem("basket", JSON.stringify(basket));
            props.setBasket(basket)
        }
    }
    
    return (
        <div className={css.wrapper}>
            <div className={css.imgwrapper}>
                <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/1453914e11424062b09885ccddc9a517_292x292.jpeg" alt="pizza"></img>
            </div>
            <div className={css.name}>
                {props.name}
            </div>
            <div className={css.description}>
                {props.description}
            </div>
            <div className={css.footer}>
                <p сlassName={css.price}> от {props.price} сом</p>
                <button className={css.pizzabtn} onClick={onSelect}>выбрать</button>
            </div>
        </div>
    );
}

export default Pizzacard;
