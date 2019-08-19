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
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import { Link, Route } from 'react-router-dom';

const AppRouter = ({match}) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={`${styles.navList} t-nav-list`}>
                            <li className={styles.navElement}>
                                <Link to={`${match.url}`} className={`${styles.link} t-link-home`}>Home</Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link to={`${match.url}/inbox`} className={`${styles.link} t-link-inbox`}>Inbox</Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link to={`${match.url}/outbox`} className={`${styles.link} t-link-outbox`}>Outbox</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            <Route path={`${match.url}`} render={() => 'Home'} exact />
                            <Route path={`${match.url}/inbox`} render={() => 'Inbox'} />
                            <Route path={`${match.url}/outbox`} render={() => 'Outbox'} />
                        </h3>
                        <Route path={`${match.url}`} component={Home} exact />
                        <Route path={`${match.url}/inbox`} component={InboxList} />
                        <Route path={`${match.url}/outbox`} component={OutboxList} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppRouter;