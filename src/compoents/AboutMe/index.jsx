/* eslint-disable max-len */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import headshot from 'images/headshot.jpg';
import SkillPill from 'compoents/SkillPill';

import commonStyles from '../common.module.css';
import styles from './AboutMe.module.css';

const SectionDiv = styled.div`
  margin-bottom: 2em;
  letter-spacing: 1px;
  font-weight: 600;
  font-family: 'Noto Sans', sans-serif;
`;

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className={`${commonStyles.MarginX}`}>
      <h1 className={`text-center my-5 ${commonStyles.TitleText}`}>About Me</h1>
      <Row>
        <Col xs={12} md={4}>
          <img src={headshot} alt="headshot" className={`${styles.Headshot} me-5 mb-4`} />
        </Col>
        <Col xs={12} md={8}>
          <SectionDiv>
            {t('aboutMe.introduce')}
          </SectionDiv>
          <SectionDiv>
            {t('aboutMe.frontFrame')}
          </SectionDiv>
          <SectionDiv>
            {t('aboutMe.styleExp')}
          </SectionDiv>
          <SectionDiv>
            {t('aboutMe.buildEnv')}
          </SectionDiv>
          <SectionDiv className="d-flex flex-wrap">
            <SkillPill>JavaScript</SkillPill>
            <SkillPill>webpack</SkillPill>
            <SkillPill>React</SkillPill>
            <SkillPill>Redux</SkillPill>
            <SkillPill>HTML</SkillPill>
            <SkillPill>CSS</SkillPill>
            <SkillPill>Sass</SkillPill>
            <SkillPill>CSS Modules</SkillPill>
            <SkillPill>Emotion</SkillPill>
          </SectionDiv>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
