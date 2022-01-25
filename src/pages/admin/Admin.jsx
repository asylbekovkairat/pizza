import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const Admin = () => {
    const history = useHistory()
    const submit = (e) => {
        e.preventDefault();
        // todo remove after auth
        history.push('/dashboard')
    }

    return (
        <form onSubmit={submit}>
            <div className='container'>
                <input type="text" placeholder='Login' />
                <input type='password' placeholder='Password' />
                <button>Login</button>
            </div>
        </form>
    );
}

export default Admin;
