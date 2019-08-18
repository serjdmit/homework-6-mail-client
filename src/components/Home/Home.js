// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>Hello world!</div>
    )
}

export default Home;