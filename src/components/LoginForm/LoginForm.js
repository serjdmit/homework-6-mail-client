// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import styles from './LoginForm.module.css';

export const LoginForm = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        props.authorize(email, password);
    };

    return (
        <div className={styles.bg}>
            <form className={`t-form ${styles.form}`}>
                <p>
                    <label htmlFor="email" className={styles.labelText}>Почта</label>
                    <input name="email" type="text" className={`t-input-email ${styles.input}`} value={email} onChange={(e) => setEmail(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="password" className={styles.labelText}>Пароль</label>
                    <input name="password" type="password" className={`t-input-password ${styles.input}`} value={password} onChange={(e) => setPassword(e.target.value)}/>
                </p>
                <div className={styles.buttons}>
                    <button className={`t-login ${styles.button}`} onClick={handleSubmit}>Войти</button>
                </div>
            </form>
        </div>
    )
}

export default withAuth(LoginForm);