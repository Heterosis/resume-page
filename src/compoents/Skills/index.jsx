import React from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import hash from 'object-hash';

import commonStyles from '../common.module.css';
import SkillCol from './SkillCol';

const Skills = () => {
  const skillsData = [
    {
      icon: ['fas', 'keyboard'],
      classification: 'Web Development',
      skills: ['HTML5', 'CSS', 'Sass', 'CSS Modules', 'Emotion', 'JavaScript', 'webpack', 'GitLab CI/CD ', 'npm', 'Babel', 'ESLint', 'Grunt', 'Bower', 'RequireJS', 'Node.js', 'Git'],
    },
    {
      icon: ['fab', 'react'],
      classification: 'Frontend Framework',
      skills: ['React', 'React Hook', 'React Router', 'react-i18next', 'Redux', 'Redux-Saga', 'Flux', 'jQuery', 'Bootstrap', 'Backbone.js'],
    },
    {
      icon: ['fas', 'globe'],
      classification: 'Language',
      skills: ['Chinese', 'Taiwanese', 'English'],
    },
  ];

  return (
    <div className={`${commonStyles.MarginX}`}>
      <h1 className={`text-center my-5 ${commonStyles.TitleText}`}>Skills</h1>
      <Row className="justify-content-around">
        {skillsData.map((skillData, index) => (
          <Col key={hash(`${_.toString(skillData)}${index}`)} md={12} lg={4}>
            <SkillCol skillData={skillData} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
