import MySlider from '../../components/Slider/slider.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from './main.module.css'
import { Order } from "../../components/Order/order.js"
import Pizzacard from '../../components/pizzaCard/PizzaCard.jsx';
import { useState, useEffect } from 'react';


export default function Main(props) {
    
    const [pizzas, setPizzas] = useState([])
    
    useEffect(() => {
        fetch("https://61dd7484f60e8f0017668817.mockapi.io/pizza-card")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPizzas(data)
                localStorage.setItem("menu", JSON.stringify(data))
            })
            .catch((error) => console.log(error))
    }, [])

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

    return (
        <div className='container'>
            <MySlider />
            <div className={css.oftenOrder + ' container'}> Часто заказывают</div>
            <Slider className={css.order + ' container'} {...settings}>{OrderList.map((e) => <Order img={e.img} name={e.name} cost={e.cost} />)}</Slider>

            <div className={css.pizzawrapper}>

                {
                    pizzas.map((item) => <Pizzacard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        setBasket={props.setBasket}
                    />)
                }

            </div>
        </div>
    )
}






