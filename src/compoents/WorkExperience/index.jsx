import React from 'react';
import hash from 'object-hash';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import commonStyles from '../common.module.css';
import EachExp from './EachExp';

const WorkExperience = () => {
  const { t } = useTranslation();

  const experienceArr = [
    {
      startDate: 'Dec. 2020',
      endDate: 'present',
      companyName: 'Senao Networks',
      companyLocation: 'Taipei City, Taiwan',
      jobTitle: 'Frontend Engineer',
      projects: [
        {
          projectName: <a href="https://cloud.engenius.ai/" target="_blank" rel="noreferrer">{t('workExperience.senao.projects.enGeniusCloud.name')}</a>,
          projectTarget: t('workExperience.senao.projects.enGeniusCloud.target'),
          projectValue: t('workExperience.senao.projects.enGeniusCloud.value'),
          projectDetails: (
            <ol>
              <li>{t('workExperience.senao.projects.enGeniusCloud.details.0')}</li>
              <li>{t('workExperience.senao.projects.enGeniusCloud.details.1')}</li>
              <li>{t('workExperience.senao.projects.enGeniusCloud.details.2')}</li>
            </ol>
          ),
          skills: ['React', 'React Hook', 'React Router', 'react-i18next', 'Flux', 'reactstrap', 'Bootstrap', 'Sass', 'webpack'],
        },
        {
          projectName: t('workExperience.senao.projects.selfHostedManagementTool.name'),
          projectTarget: t('workExperience.senao.projects.selfHostedManagementTool.target'),
          projectValue: t('workExperience.senao.projects.selfHostedManagementTool.value'),
          projectDetails: (
            <ol>
              <li>{t('workExperience.senao.projects.selfHostedManagementTool.details.0')}</li>
              <li>{t('workExperience.senao.projects.selfHostedManagementTool.details.1')}</li>
            </ol>
          ),
          skills: ['React', 'React Hook', 'React Router', 'Redux', 'Redux-Saga', 'reactstrap', 'Bootstrap', 'Sass', 'webpack'],
        },
      ],
    },
    {
      startDate: 'Aug. 2019',
      endDate: 'Nov. 2020',
      companyName: 'LatticeWork',
      companyLocation: 'Hsinchu County, Taiwan',
      jobTitle: 'Frontend Engineer',
      projects: [
        {
          projectName: t('workExperience.latticeWork.projects.amber.name'),
          projectTarget: t('workExperience.latticeWork.projects.amber.target'),
          projectValue: t('workExperience.latticeWork.projects.amber.value'),
          projectDetails: (
            <ol>
              <li>{t('workExperience.latticeWork.projects.amber.details.0')}</li>
              <li>{t('workExperience.latticeWork.projects.amber.details.1')}</li>
            </ol>
          ),
          skills: ['Backbone.js', 'Bootstrap', 'jQuery', 'i18next', 'Sass', 'Grunt', 'RequireJS', 'GitLab CI/CD'],
        },
        {
          projectName: t('workExperience.latticeWork.projects.migrateDevelopmentEnvironment.name'),
          projectTarget: t('workExperience.latticeWork.projects.migrateDevelopmentEnvironment.target'),
          projectValue: t('workExperience.latticeWork.projects.migrateDevelopmentEnvironment.value'),
          projectDetails: (
            <ol>
              <li>{t('workExperience.latticeWork.projects.migrateDevelopmentEnvironment.details.0')}</li>
              <li>{t('workExperience.latticeWork.projects.migrateDevelopmentEnvironment.details.1')}</li>
              <li>{t('workExperience.latticeWork.projects.migrateDevelopmentEnvironment.details.2')}</li>
            </ol>
          ),
          skills: ['npm', 'webpack', 'Babel', 'ESLint', 'GitLab CI/CD'],
        },
      ],
    },
    {
      startDate: 'Sep. 2012',
      endDate: 'Jun. 2016',
      companyName: t('workExperience.nuk.companyName'),
      companyLocation: 'Kaohsiung City, Taiwan',
      jobTitle: t('workExperience.nuk.jobTitle'),
      projects: [],
    },
  ];

  return (
    <div className={`${commonStyles.MarginX}`}>
      <h1 className={`text-center my-5 ${commonStyles.TitleText}`}>Experience</h1>
      {experienceArr.map((experience, index) => (
        <EachExp
          key={hash(`${_.toString(experience)}${index}`)}
          experience={experience}
        />
      ))}
    </div>
  );
};

export default WorkExperience;
