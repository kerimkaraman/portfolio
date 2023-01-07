import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Welcome from './Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./App")), 2000);
  });
});

root.render(
  <React.StrictMode>
    <Suspense fallback={<Welcome />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
