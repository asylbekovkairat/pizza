import React from 'react';
import css from './login.module.css'
const Login = ({open, setOpen}) => {
    return (
        <div className={css.login + " " + (open ? css.opened : '')} onClick={() => setOpen(false)}>
            <div className={css.login__content} onClick={(e) => e.stopPropagation()}>
                <div className={css.sm}>
                    <h1 className={css.title}>Вход на сайт</h1>
                    <p className={css.des}>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
                </div>
                <div className={css.ig}>
                    <label className={css.label}>
                        <span className={css.phonenum}>Номер телефона</span>
                        <div className={css.input__container}>
                            <input placeholder='+996' className={css.input}></input>
                        </div>
                    </label>
                </div>
                <div className={css.cm}>
                    <button className={css.loginbtn}>Выслать код</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
