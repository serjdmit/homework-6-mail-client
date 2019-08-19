// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React from 'react';
import styles from './Mail.module.css';

const Mail = (props) => {
    return (
        <div className={styles.container}>
            {props.from ? (
                <p className="t-mail-from">
                    From: 
                    <b> {props.from}</b>
                </p>
            ) : (
                <p className="t-mail-to">
                    To: 
                    <b> {props.to}</b>
                </p>
            )}
            <p className="t-mail-body">{props.body}</p>
        </div>
    )
}

export default Mail;