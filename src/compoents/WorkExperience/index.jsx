import React from 'react';

import commonStyles from '../common.module.css';
import EachExp from './EachExp';

const WorkExperience = () => {
  const experienceArr = [
    {
      startDate: 'Dec. 2020',
      endDate: 'present',
      companyName: 'Senao Networks',
      companyLocation: 'Taipei City, Taiwan',
      jobTitle: 'Frontend Engineer',
      projects: [
        {
          projectName: <a href="https://cloud.engenius.ai/" target="_blank" rel="noreferrer">Web GUI of EnGenius Cloud</a>,
          projectDescription: (
            <ol>
              <li>Implement new features and maintain existing code</li>
              <li>
                Communicate with UI/UX and Product Manager and
                evaluate product software implementation methods
              </li>
            </ol>
          ),
          skills: ['React', 'React Hook', 'React Router', 'react-i18next', 'Flux', 'reactstrap', 'Bootstrap', 'Sass', 'webpack'],
        },
        {
          projectName: 'Web GUI of a self-hosted management tool for Enterprise-Level networks',
          projectDescription: (
            <ol>
              <li>Implement new features and maintain existing code</li>
              <li>
                Communicate with UI/UX and Product Manager and
                evaluate product software implementation methods
              </li>
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
          projectName: 'Web GUI of AmberPRO and Amber X',
          projectDescription: (
            <ol>
              <li>Implement new features and maintain existing code</li>
              <li>
                Communicate with UI/UX and Product Manager and
                evaluate product software implementation methods
              </li>
            </ol>
          ),
          skills: ['Backbone.js', 'Bootstrap', 'jQuery', 'i18next', 'Sass', 'Grunt', 'RequireJS', 'GitLab CI/CD'],
        },
        {
          projectName: 'Migrate Development Environment',
          projectDescription: (
            <ol>
              <li>Migrate package manager from Bower to npm</li>
              <li>Migrate module bundler from Grunt+RequireJS to webpack</li>
              <li>Integrate Babel and ESLint to support ES6+ features</li>
            </ol>
          ),
          skills: ['npm', 'webpack', 'Babel', 'ESLint', 'GitLab CI/CD'],
        },
      ],
    },
  ];

  return (
    <div className={`${commonStyles.MarginX}`}>
      <h1 className={`text-center my-5 ${commonStyles.TitleText}`}>Work Experience</h1>
      {experienceArr.map((experience) => <EachExp experience={experience} />)}
    </div>
  );
};

export default WorkExperience;
