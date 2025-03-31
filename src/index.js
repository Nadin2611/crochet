import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';

import GlobalStyles from 'assets/styles';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/crochet">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>
);
