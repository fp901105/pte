import React from 'react';
import ReactDOM from 'react-dom';
import {PageLayout} from './components/layout.jsx'
//import {Player} from './player.jsx'
import { HashRouter as Router, Route } from 'react-router-dom';

import 'antd/dist/antd.css'

ReactDOM.render(
  <Router>
    <Route path="/" component={PageLayout}/>
  </Router>
  ,
  document.getElementById('app'));
