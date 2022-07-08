import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

//fake comments
// function emitComment(id){
//     setInterval(() =>{
//       window.dispatchEvent(
//         new CustomEvent(`user-${id}`, {
//           detail: `comment by ${id}`
//         })
//       )
//     }, 3000)
// } 

// emitComment(1)
// emitComment(2)
// emitComment(3)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <Router>
      <App />
   </Router>
  // </React.StrictMode>
);

reportWebVitals();
