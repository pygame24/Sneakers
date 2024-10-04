import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Favorite from './components/favorite/Favorite';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/favorite',
//     element: <Favorite />
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider router={router} />
  
  <App />
);
