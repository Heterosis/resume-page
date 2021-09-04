import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './WorkExperience.module.css';
import Project from './Project';

const WorkExperience = (props) => {
  const { experience } = props;
  const {
    startDate, endDate, companyName, companyLocation, jobTitle, projects,
  } = experience;

  return (
    <div className={`${styles.ExperienceRow}`}>
      <div className="d-flex">
        <div className={`${styles.BookmarkIconWrapper}`}>
          <FontAwesomeIcon icon={['fas', 'bookmark']} className={`${styles.BookmarkIcon}`} />
        </div>
        <span className={`${styles.ExperienceDate}`}>{`${startDate} - ${endDate}`}</span>
      </div>
      <div className={`${styles.ExperienceContent}`}>
        <div className={`${styles.CompanyRow}`}>
          <span className={`${styles.Company}`}>{companyName}</span>
          <span className={`${styles.Location}`}>{companyLocation}</span>
        </div>
        <div className={`${styles.Title}`}>
          {jobTitle}
        </div>
        {projects.map((project) => <Project project={project} />)}
      </div>
    </div>
  );
};

export default WorkExperience;
