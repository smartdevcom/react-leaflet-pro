// IE11 polyfills
// import "core-js/fn/string/starts-with";
// import "core-js/fn/array/find";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';
import * as serviceWorker from './serviceWorker';

if (module.hot) {
   module.hot.accept();
}

const target = document.querySelector('#root');

window.isMobile = window.innerWidth < 960;

const render = Component => {
   ReactDOM.render(
      <Provider store={store}>
         <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
         </BrowserRouter>
      </Provider>,
      target
   );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
