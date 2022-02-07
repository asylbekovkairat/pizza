import css from "./modal.module.css"
import { useSelector, useDispatch } from 'react-redux';


const Modal = ({ active, setActive,}) => {

  const basket = useSelector((state) => state.basket.data)

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
            {basket.length} товаров на {
              basket.reduce((akk, el) => {
                return akk + el.price
              }, 0)
            } сом
          </h1>
        </section>
        <section className={css.cartlist}>
          {
            basket.map((pizza) => <article className={css.orderedart}>
              <div className={css.kNccfK}></div>
              <div className={css.ipBfzI}>
                <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/1453914e11424062b09885ccddc9a517_292x292.jpeg" alt="pizza" className={css.orderedimg}></img>
                <div className={css.orderedname}>
                  <h3 className={css.cdZkPN}>
                    {pizza.name}
                  </h3>
                  <section>
                    <div className={css.orderdes}>
                      {pizza.description}
                    </div>
                  </section>
                </div>
              </div>
              <div className={css.orderprice}>
                <div className={css.dQQQbj}>
                  <div className={css.current}>
                    {pizza.price} сом
                  </div>
                </div>
                <div className={css.counter}>
                  <button className={css.minus}>
                    <svg width="10" height="10" viewBox="0 0 10 10" class="icon"><rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect></svg>
                  </button>
                  <div className={css.ordernumber}>1</div>
                  <button className={css.plus}>
                    <svg width="10" height="10" viewBox="0 0 10 10" class="icon"><g fill="#454B54"><rect x="4" width="2" height="10" ry="1"></rect><rect y="4" width="10" height="2" rx="1"></rect></g></svg>
                  </button>
                </div>
              </div>
            </article>)
          }
        </section>
        <div className={css.footer}>
          <section className={css.xtkza}>
            <div className={css.subtotal}>
              <div className={css.info}>
                {basket.length} товаров
                <span>{
                  basket.reduce((akk, el) => {
                    return akk + el.price
                  }, 0)
                } сом </span>
              </div>
            </div>
            <div className={css.info}>
              Сумма заказа
              <span className={css.footersum}>{
                basket.reduce((akk, el) => {
                  return akk + el.price
                }, 0)
              } сом </span>
            </div>
            <button className={css.bttn}>
              <p>К оформлению заказа</p>
            </button>
          </section>
        </div>

      </div>
    </div>
  );
}

export default Modal