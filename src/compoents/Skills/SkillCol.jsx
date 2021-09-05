import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import hash from 'object-hash';

import styles from './Skills.module.css';

const SkillCol = (props) => {
  const { skillData } = props;
  const { icon, classification, skills } = skillData;

  return (
    <div className={`${styles.SkillCol}`}>
      <div className="d-flex justify-content-center align-items-center mb-1">
        <FontAwesomeIcon icon={icon} style={{ fontSize: 60 }} className={`${styles.SkillIcon}`} />
      </div>
      <h4 className="text-center mb-3">{classification}</h4>
      <Row xs={2}>
        {skills.map((skill, index) => (
          <Col
            key={hash(`${_.toString(skill)}${index}`)}
            className="mb-1"
          >
            {skill}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SkillCol;
