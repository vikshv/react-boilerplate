import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import App from '../App';

const Root: React.FC = () => (
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <App />
  </ErrorBoundary>
);

export default Root;
