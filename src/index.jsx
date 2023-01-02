import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'css/index.css';
import './fontawesome';
import './i18n';

import App from 'components/App';
import Loading from 'components/Loading';

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <App name="react" />
  </Suspense>,
  document.getElementById('app'),
);
