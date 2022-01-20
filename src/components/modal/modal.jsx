// сделать map в этой компоненте и удалить из навбара

import css from "./modal.module.css"


const Modal = ({ active, setActive, pizzas, ...props }) => {

    return (
        <div className={css.modal + " " + (active ? css.active : "")} onClick={() => setActive(false)}>
            <div className={css.modal__content} onClick={(e) => e.stopPropagation()}>
                <button className={css.button__close} onClick={() => setActive(false)}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z" fill="#fff"></path>
                    </svg>
                </button>
                <section className={css.section}>
                    <h1 className={css.orderedtitle}>
                        {props.basket.length} товаров на сом
                    </h1>
                </section>
                <section className={css.cartlist}>
                    <article className={css.orderedart}>
                        <div className={css.kNccfK}></div>
                        <div className={css.ipBfzI}>
                            <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/1453914e11424062b09885ccddc9a517_292x292.jpeg" alt="pizza" className={css.orderedimg}></img>
                            <div className={css.orderedname}>
                                <h3 className={css.cdZkPN}>
                                    {props.name}
                                </h3>
                                <section>
                                    <div>
                                        {props.description}
                                    </div>
                                </section>
                            </div>
                            <div className={css.orderprice}>
                                <div className={css.dQQQbj}>
                                    <div className={css.current}>{props.price}</div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>    
            </div>
        </div>
    );
}

export default Modal;

