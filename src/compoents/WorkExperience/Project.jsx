import React from 'react';
import hash from 'object-hash';

import SkillPill from 'compoents/SkillPill';

import styles from './WorkExperience.module.css';

const Project = (props) => {
  const { project } = props;
  const {
    projectName, projectDescription, skills,
  } = project;

  return (
    <>
      <h5 className={`${styles.ProjectName}`}>{projectName}</h5>
      <div>{projectDescription}</div>
      <div className={`${styles.SkillPills}`}>
        {skills.map((skill) => <SkillPill key={hash(skill)}>{skill}</SkillPill>)}
      </div>
    </>
  );
};

export default Project;
