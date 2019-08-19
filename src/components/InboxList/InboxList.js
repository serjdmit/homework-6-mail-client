import React from 'react';
import { withData }  from '../../context/Data';
import { Link, Route } from 'react-router-dom';
import styles from './InboxList.module.css';
import InboxMail from '../InboxMail';

const Inbox = (props) => {
    const links = [];

    for (const [index, email] of props.data.inbox.entries()) {
        links.push(
            <Link key={index} to={`${props.match.url}/${email.id}`} className={styles.link}>
                {email.body}
            </Link>
        );
    }

    return (
        <>
            <div className={`${styles.container} t-inbox-list`}>
                {props.match.isExact && links}
                <Route path={`${props.match.path}/:id`} component={InboxMail} />
            </div>
        </>
    );
}

export default withData(Inbox);