import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav } from 'react-bootstrap';
import useScrollSpy from 'react-use-scrollspy';

import LangBtn from './LangBtn';
import style from './App.module.css';

const App = (props) => {
  const { name } = props;
  const { t } = useTranslation();

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -150,
  });

  const sayHi = () => 'Hi';

  return (
    <div>
      <Navbar fixed="top" className={`${style.TransparentBg}`}>
        <Nav>
          {activeSection}
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                const yOffset = -50;
                const y = sectionRefs[5]
                  .current.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y });
              }}
            >
              Link
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/Heterosis/react-basic-project" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={['fab', 'github']} style={{ fontSize: 30 }} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <header
        ref={sectionRefs[0]}
        className={`d-flex flex-column justify-content-center align-items-center ${style.Vh100} ${style.HeaderColor}`}
      >
        <div className={`${style.HeaderAnimation}`}>
          <h1>Hi, I&apos;m Heterosis!</h1>
          <p className="text-center">在前端工程師的路上不斷努力</p>
        </div>
      </header>
      <section ref={sectionRefs[1]} className={`${style.Vh100}`}><h1>Section 1</h1></section>
      <section ref={sectionRefs[2]} className={`${style.Vh100}`}><h1>Section 2</h1></section>
      <section ref={sectionRefs[3]} className={`${style.Vh100}`}><h1>Section 3</h1></section>
      <section ref={sectionRefs[4]} className={`${style.Vh100}`}><h1>Section 4</h1></section>
      <section ref={sectionRefs[5]} className={`${style.Vh100}`}><h1>Section 5</h1></section>
      <section ref={sectionRefs[6]} className={`${style.Vh100}`}><h1>Section 6</h1></section>
      <LangBtn />
      <h1>{t('title')}</h1>
      <h1 className={`${style.H1}`}>Hello, World!!</h1>
      <h2>{sayHi()}</h2>
      <h3>{name}</h3>
    </div>
  );
};

export default App;
