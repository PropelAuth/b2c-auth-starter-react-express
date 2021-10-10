import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProvider} from "@propelauth/react";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider authUrl="https://REPLACE_ME.test.propelauth.com">
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

