import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Contact.module.css';

const ContactCircle = (props) => {
  const { contactData } = props;
  const {
    icon, title, info, link,
  } = contactData;

  return (
    <a href={link} target="_blank" rel="noreferrer" className={`${styles.ContactLink}`}>
      <div className={`${styles.ContactCircle} d-flex flex-column justify-content-center align-items-center`}>
        <FontAwesomeIcon icon={icon} className={`${styles.ContactIcon}`} />
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    </a>
  );
};

export default ContactCircle;
