import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from './Logic/redux/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
