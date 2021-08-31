import React from 'react';

import commonStyles from './common.module.css';

const AboutMe = () => (
  <div>
    <h1 className={`w-100 text-center my-5 ${commonStyles.TitleText}`}>About Me</h1>
    <div>
      {`      Lorem ipsum dolor sit amet, unum etiam argument
      Iusto putent civibus ne est. Lobortis patrioque
      Et odio hinc sea, esse molestie eu his, an offi
      Qui at impedit electram vulputate, ex per sense
      In elit modus recusabo vis. Sea et prodesset sc
`}
    </div>
  </div>
);

export default AboutMe;
