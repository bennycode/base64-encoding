/* eslint-disable sort-imports */
import 'babel-polyfill';
/* eslint-enable sort-imports */
import {AppContainer} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';

const main = document.createElement('div');
main.id = 'main';
document.body.appendChild(main);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main'),
  );
};

function runApp() {
  render(Root);
  if (module.hot) {
    module.hot.accept('Root', () => {
      const NextApp = require('Root').default;
      render(NextApp);
    });
  }
}

runApp();
