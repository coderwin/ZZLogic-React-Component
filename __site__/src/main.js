import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, browserHistory } from 'react-router';

import rootRoute from './Router'
import './main.less';

render((
    <Router
      history={hashHistory}
      routes={rootRoute}
    />
), document.getElementById('app'));
