import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// Old version
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <h1>Hello React!</h1>,
//   document.getElementById('root')
// );


// Latest version
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Components
