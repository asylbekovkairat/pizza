import css from './navbar.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Modal from "../modal/modal.jsx"
import { useState } from 'react';
import { useSelector } from 'react-redux';



export default function Navbar () {

    const [modalActive, setModalActive] = useState(false)
    const basket = useSelector((state) => state.basket.data)
    
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
                <Modal active={modalActive} setActive={setModalActive} />
            </div>

        <button className={css.bucket}  onClick={() => setModalActive(true)}>Корзина
            <span> {basket.length} </span>
        </button>      
        </nav>
    )
}