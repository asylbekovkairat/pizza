import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import css from './admin.module.css'
import { useState } from 'react';

const Admin = ({ setIsAuth}) => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const submit = (e) => {
    e.preventDefault();
    // if(authorized){
    //   return history.push("/dashboard")
    // }
    setIsDisabled(true)
    fetch("https://pizza-app-ulan.herokuapp.com/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        login: user,
        password: password
      })
    })
      .finally(() => {
        setIsDisabled(false)
      })
      .then((res) => res.json())
      .then((data) => {
        // TODO: remove push after login logic
        if (data?.token) {
          setIsAuth(data)
        } else {
          setError(data.msg)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className={css.formwrapper}>
      <form onSubmit={submit} className={css.form} >
        <div className={css.login__content}>
          <div className={css.sm}>
            <h2 className={css.title}>Добро пожаловать</h2>
            <p className={css.des}>Редактирование сайта: добавление удаление и корректировка</p>
          </div>
          <div className={css.ig}>
            <label className={css.label}>
              <span className={css.phonenum}>Введите свой логин</span>
              <div className={css.input__container}>
                <input placeholder='логин' className={css.input} value={user} onChange={(e) => setUser(e.target.value)} />
              </div>
              <span className={css.phonenum}>Введите пароль</span>
              <div className={css.input__container}>
                <input placeholder='пароль' className={css.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </label>
          </div>
          <div className={css.cm}>
            <button disabled={isDisabled} className={css.loginbtn}>Подтвердить</button>
          </div>
        </div>
        <div className='error'>{error}</div>
      </form>
    </div>
  );
}

export default Admin;
