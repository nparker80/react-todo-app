// import is basically require but for react/front end code. require does not work in react. 
// export 
// import from react allows us to use JSX (JavaScript and XML) syntax
import React from 'react';
// ReactDOM takes us to our page and renders it  to the page
// we only use DOM once and always in the index.js
import ReactDOM from 'react-dom';
import App from './App';
// One function built into it. Render.
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

