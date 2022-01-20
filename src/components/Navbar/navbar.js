import css from './navbar.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Modal from "../modal/modal.jsx"
import { useState, useEffect } from 'react';



export default function Navbar (props) {

    const [modalActive, setModalActive] = useState(false)

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

    return(
        <nav className={'container ' + css.navbar}> 
            <div className={css.help}> 
                <Link className={css.navbars} to='/pizza'>Пицца</Link> 
                <Link className={css.navbars} to='/combo'>Комбо</Link> 
                <Link className={css.navbars} to='/snacks'>Закуски</Link> 
                <Link className={css.navbars} to='/desserts'>Десерты</Link> 
                <Link className={css.navbars} to='/drinks'>Напитки</Link> 
                <Link className={css.navbars} to='/other'>Другие товары</Link> 
                <Link className={css.navbars} to='/stock'>Акции</Link> 
                <Link className={css.navbars} to='/contacts'>Контакты</Link> 
                <Link className={css.navbars} to='/AboutUs'>О нас</Link> 
                <Link className={css.navbars} to='/Live'>Прямой эфир</Link> 
            </div>

                {
                    pizzas.map((item) => <Modal
                        active={modalActive} 
                        setActive={setModalActive} 
                        basket={props.basket}
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />)
                }
            
        <button className={css.bucket}  onClick={() => setModalActive(true)}>Корзина
            <span> {props.basket.length} </span>
        </button>      
        </nav>
    )
}