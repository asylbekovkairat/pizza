import React from 'react';
import css from './admin.module.css'
import { useState } from 'react';
import axios from "axios"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from "react-redux"
import { successAuth } from './../../redux/actions/authActions';

const Admin = () => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  const dispatch = useDispatch()

  const submit = (e) => {
    e.preventDefault();
    setIsDisabled(true)
    axios.post("https://pizza-app-ulan.herokuapp.com/admin", {
      login: user,
      password: password
    })
      .finally(() => {
        setIsDisabled(false)
      })
      .then((res) => {
        if (res.data?.token) {
          // setIsAuth(res.data)
          dispatch(successAuth(res.data))
        } else {
          setError(res.data.msg)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const history = useHistory()
  const logout = () => {
    history.push("/")
  }

  return (
    <div className={css.formwrapper}>
      <form onSubmit={submit} className={css.form} >
        <div className={css.login__content}>
          <div className={css.sm}>
            <h2 className={css.title}>Welcome</h2>
            <p className={css.des}>Edit the site</p>
          </div>
          <div className={css.ig}>
            <label className={css.label}>
              <span className={css.phonenum}>Enter your name</span>
              <div className={css.input__container}>
                <input placeholder='Name' className={css.input} value={user} onChange={(e) => setUser(e.target.value)} />
              </div>
              <span className={css.phonenum}>Enter your password</span>
              <div className={css.input__container}>
                <input placeholder='Password' className={css.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </label>
          </div>
          <div className={css.cm}>
            <button disabled={isDisabled} className={css.loginbtn}>Log In</button>
            <button className={css.lgo} disabled={isDisabled} onClick={logout}>Log out</button>
          </div>
        </div>
        <div className='error'>{error}</div>
      </form>
    </div>
  );
}

export default Admin;
