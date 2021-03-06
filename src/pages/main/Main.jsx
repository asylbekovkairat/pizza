import MySlider from '../../components/Slider/slider.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from './main.module.css'
import { Order } from "../../components/Order/order.js"
import Pizzacard from '../../components/pizzaCard/PizzaCard.jsx';
import { useSelector } from "react-redux"


export default function Main(props) {
  const pizzas = useSelector((state) => state.pizzas.data)
  
  const OrderList = [
    {
      img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/730db614-8678-4465-859c-bd8c9d8ef427.jpg',
      name: 'Пеперони',
      cost: 'от 365 сом'
    },
    {
      img: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/fe11cd84d2654f9986a9c77d75d9d375_138x138.webp',
      name: '2 пиццы',
      cost: '979 сом'
    },
    {
      img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/27593636-cbd8-417e-a702-2c03a6a2bff9.jpg',
      name: 'Мексиканская',
      cost: 'от 395 сом',
    },
    {
      img: 'https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/c314fbb6e9b0417f93a5f891a10305e9_138x138.webp',
      name: 'Комбо за 1049 сом',
      cost: '1049 сом'
    },
    {
      img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c7438015dcc24d599daa02db7ff79be6_138x138.jpeg',
      name: 'Додстер',
      cost: '149 сом'
    },
    {
      img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/c1b04dac00494475bbb58c70db4c7bdf_138x138.jpeg',
      name: 'Рулетики с брусникой',
      cost: '149 сом'
    }
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 4.45,
    slidesToScroll: 1,
  };

  function NoPigs() {
    return (
      <figure className={css.fig}>
        <img src="https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg" alt="safe" />
        <div className={css.caption}>
          <h1 className={css.title}>Без свинины</h1>
          "Мы готовим без свинины"
        </div>
      </figure>
    )
  }

  return (
    <div className='container'>
      <MySlider />
      <div className={css.oftenOrder + ' container'}> Часто заказывают</div>
      <Slider className={css.order + ' container'} {...settings}>{OrderList.map((e, index) => <Order img={e.img} key={index} name={e.name} cost={e.cost} />)}</Slider>
      <NoPigs />
      <div className={css.pizzas + 'container'}>Пицца</div>

      <div className={css.pizzawrapper}>

        {
          pizzas &&
          pizzas?.map((item, index) => <Pizzacard
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.img}
            setBasket={props.setBasket}
          />)
        }

      </div>
    </div>
  )
}






