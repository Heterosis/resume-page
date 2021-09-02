/* eslint-disable max-len */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from '@emotion/styled';

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

const AboutMe = () => (
  <div className={`${commonStyles.MarginX}`}>
    <h1 className={`text-center my-5 ${commonStyles.TitleText}`}>About Me</h1>
    <Row>
      <Col xs={12} md={4}>
        <img src={headshot} alt="headshot" className={`${styles.Headshot} me-5 mb-4`} />
      </Col>
      <Col xs={12} md={8}>
        <SectionDiv>
          Hi! 我是一名自學轉職的前端工程師，由於有自學的經驗，我有自信在工作中遭遇到問題時，獨力搜尋並解決問題，並在學習新技術上更有心得。
        </SectionDiv>
        <SectionDiv>
          在前端框架上，使用過 Backbone.js + jQuery，目前主要使用 React + Flux/Redux 及其相關生態系的套件進行開發，目前主要以 React Hook 為主要的開發方式，在 Redux 的非同步處理 middleware 上則有 Redux-Saga 的使用經驗。
        </SectionDiv>
        <SectionDiv>
          樣式設計上有 Sass 與 CSS Modules 的使用經驗，目前也在研究 Emotion，期許自己能在開發能力上更精進。
        </SectionDiv>
        <SectionDiv>
          參與過 webpack 與 Grunt + RequireJS 的開發環境建置，以及 GitLab CI/CD YAML file 設定，作為一名前端工程師，不只是開發網頁，對於開發流程也有所理解。
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

export default AboutMe;
