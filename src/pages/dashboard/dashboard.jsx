import React from 'react';
import css from './dashboard.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Dbedit from '../dbedit/dbedit.jsx';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect } from 'react-router-dom';
const Dashboard = ({ authorized,setIsAuth, ...props }) => {
    const history = useHistory()
    const submit = (e) => {
        e.preventDefault();
        // todo remove after 
        setIsAuth(null)
    }
    // if (!authorized) {
    //     return <Redirect to="/admin" />
    // }
    return (
        <div>
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
                <button className={css.bucket} onClick={submit}>Log out</button>


            </nav>
            <div className={"container " + css.Dbeditwrapper}>
                {
                    props.pizzas.map((item) => <Dbedit
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.img}
                    />)
                }
            </div>
        </div>

    );
}

export default Dashboard;

