import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import App from '../App';
import store from 'src/store';

const Root: React.FC = () => (
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </ErrorBoundary>
);

export default Root;
