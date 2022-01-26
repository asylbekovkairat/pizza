import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import css from './admin.module.css'

const Admin = () => {
    const history = useHistory()
    const submit = (e) => {
        e.preventDefault();
        // todo remove after auth
        history.push('/dashboard')
    }

    return (
        <form onSubmit={submit} className={css.form}>
            <div className={css.login__content}>
                <div className={css.sm}>
                    <h1 className={css.title}>Вход на админ панель</h1>
                    <p className={css.des}>Редактирование сайта: добавление удаление и корректировка</p>
                </div>
                <div className={css.ig}>
                    <label className={css.label}>
                        <span className={css.phonenum}>Введите свой логин</span>
                        <div className={css.input__container}>
                            <input placeholder='логин' className={css.input}></input>
                        </div>
                        <span className={css.phonenum}>Введите пароль</span>
                        <div className={css.input__container}>
                            <input placeholder='пароль' className={css.input}></input>
                        </div>
                    </label>
                </div>
                <div className={css.cm}>
                    <button className={css.loginbtn}>Подтвердить</button>
                </div>
            </div>
        </form>
    );
}

export default Admin;
