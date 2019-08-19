import React from 'react';
import { withData }  from '../../context/Data';
import { Link, Route } from 'react-router-dom';
import styles from './OutboxList.module.css';
import OutboxMail from '../OutboxMail';

const Outbox = (props) => {
    const links = [];

    for (const [index, email] of props.data.outbox.entries()) {
        links.push(
            <Link key={index} to={`${props.match.url}/${email.id}`} className={styles.link}>
                {email.body}
            </Link>
        );
    }

    return (
        <>
            <div className={`${styles.container} t-outbox-list`}>
                {props.match.isExact && links}
                <Route path={`${props.match.path}/:id`} component={OutboxMail} />
            </div>
        </>
    );
}

export default withData(Outbox);