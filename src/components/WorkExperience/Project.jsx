import React from 'react';
import hash from 'object-hash';
import { useTranslation } from 'react-i18next';

import SkillPill from 'components/SkillPill';

import styles from './WorkExperience.module.css';

const Project = (props) => {
  const { project } = props;
  const {
    projectName, projectTarget, projectValue, projectDetails, skills,
  } = project;
  const { t } = useTranslation();

  return (
    <>
      <h5 className={`${styles.ProjectName}`}>{projectName}</h5>
      <h6>
        {t('common.target')}
        :
        {' '}
        {projectTarget}
      </h6>
      <h6>
        {t('common.value')}
        :
        {' '}
        {projectValue}
      </h6>
      <div>
        <h6>
          {t('common.details')}
          :
        </h6>
        {projectDetails}
      </div>
      <div className={`${styles.SkillPills}`}>
        {skills.map((skill) => <SkillPill key={hash(skill)}>{skill}</SkillPill>)}
      </div>
    </>
  );
};

export default Project;
