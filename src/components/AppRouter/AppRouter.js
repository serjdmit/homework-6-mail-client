// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React from 'react';
import styles from './AppRouter.module.css';
const AppRouter = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navElement}>Home</li>
                            <li className={styles.navElement}>Inbox</li>
                            <li className={styles.navElement}>Outbox</li>
                        </ul>
                    </nav>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Home</h3>
                        <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppRouter;