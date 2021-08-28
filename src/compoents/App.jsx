import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import LangBtn from './LangBtn';
import style from './App.module.css';

const App = (props) => {
  const { name } = props;
  const { t } = useTranslation();

  const sayHi = () => 'Hi';

  return (
    <div>
      <LangBtn />
      <h1>{t('title')}</h1>
      <h1 className={`${style.H1}`}>Hello, World!!</h1>
      <h2>{sayHi()}</h2>
      <h3>{name}</h3>
      <footer className="position-fixed bottom-0 w-100">
        <div className={`${style.ReverseRow}`}>
          <a className={`${style.Link}`} href="https://github.com/Heterosis/react-basic-project" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: 40 }} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
