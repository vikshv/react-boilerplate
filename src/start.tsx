import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './containers/Root';

const ROOT_ID = 'root';

function renderApp() {
  const root = createRoot(document.getElementById(ROOT_ID));
  root.render(<Root />);
}

export default function start() {
  renderApp();
}
