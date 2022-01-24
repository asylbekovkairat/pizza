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
          {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1a1 1 0 011 1v2a8 8 0 110 16v2a1 1 0 11-2 0v-2H6.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C5 19.24 5 18.96 5 18.4V5.6c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C5.76 4 6.04 4 6.6 4H10V2a1 1 0 011-1zm1 17a6 6 0 000-12H7v12h5z" fill="#000"></path></svg> */}
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