import React from 'react';
import _ from 'lodash';
import hash from 'object-hash';

import commonStyles from '../common.module.css';
import ContactCircle from './ContactCircle';

const Contact = (props) => {
  const { navExpand } = props;
  const contactArr = [
    {
      icon: ['fab', 'github'], title: 'GitHub', info: 'Heterosis', link: 'https://github.com/Heterosis/',
    },
    {
      icon: ['fas', 'envelope'], title: 'Email', info: ' ', link: 'mailto:a3817001@gmail.com',
    },
    {
      icon: ['fab', 'linkedin'], title: 'LinkedIn', info: 'You-ting Jhang', link: 'https://www.linkedin.com/in/you-ting-jhang/',
    },
  ];

  return (
    <div className={`${commonStyles.MarginX}`}>
      <h1 className={`text-center my-5 ${commonStyles.TitleText}`}>Contact</h1>
      <div className={`d-flex justify-content-center align-items-center ${navExpand ? '' : 'flex-column'}`}>
        {contactArr.map((contactData, index) => (
          <ContactCircle
            key={hash(`${_.toString(contactData)}${index}`)}
            contactData={contactData}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
