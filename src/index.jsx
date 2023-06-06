import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/sass/style.css'
import App from './App'

// class List extends React.Component{
//   render(){
//     return(
//       <ul>
//         <li>test list</li>
//         <li>test list</li>
//         <li>test list</li>
//         <li>test list</li>
//       </ul>
//     )
//   }
// }
// class App extends React.Component{
//   render(){
//     return(
//       <>
//       <h1>Hello React</h1>
//       <List />
//       <List />
//       <List />
//       <List />
//       </>
//     )
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

