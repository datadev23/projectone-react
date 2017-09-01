import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Water from './Water';
import Hello from './Hello';
import Name from './Name';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Water />, document.getElementById('root'));
registerServiceWorker();
