import Login from '../LogIn/login'
import css from './header.module.css'
import { useState } from 'react'

const Header = () =>{
  const [openActive, setOpenActive] = useState(false)
  
  return(
    <div className={"container " + css.wrapper}>     
      <img className={css.logo} src='https://kloop.kg/wp-content/uploads/2020/05/35167255714_671b6ed037_c.jpg'/>            
      <div>
        <p className={css.p}>
          Доставка пиццы Бишкек
        </p>
        <p className={css.ptext}>
          40мин 4,75
        </p>
      </div>
      <div>
        <a className={css.a} href='Tel:+996700231661'>+996700231661  
          <p className={css.pcall}>Звонок по телефону</p>
        </a>
      </div>
      <div>
        <button className={css.label}>
          Додокоины
        </button>
      </div>
      <div>
        <button className={css.log}  onClick={() => setOpenActive(true)}>Войти</button>
      </div>
      <Login open={openActive} setOpen={setOpenActive}/>
    </div>
  )
}

export default Header