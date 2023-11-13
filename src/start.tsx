import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App';

const ROOT_ID = 'root';

function renderApp() {
  const root = createRoot(document.getElementById(ROOT_ID));
  root.render(<App />);
}

export default function start() {
  renderApp();
}
