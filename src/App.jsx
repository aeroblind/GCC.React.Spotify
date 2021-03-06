import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import configureStore from './_store/configureStore';
import Main from './layouts/main';

//  bootstrap
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

// const initialState = {};
// const store = configureStore(initialState);

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('root');
  if (target) {
    ReactDOM.render(
      // <Provider store={store}>
        <Main></Main>,
        // <BrowserRouter>
        //   <AppRoutes/>
        // </BrowserRouter>,
      // </Provider>,
      target,
    );
  } else {
    console.warn('tried to load React and failed :(');
  }
});