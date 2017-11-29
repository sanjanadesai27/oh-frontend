import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Components/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
<Router>
  <App />
</Router>, document.getElementById('root'));
registerServiceWorker();
