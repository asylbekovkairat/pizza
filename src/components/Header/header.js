import css from './header.module.css'

const Header = () =>{
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
        <button className={css.log}>Войти</button>
     </div>
  </div>
  )
}

export default Header