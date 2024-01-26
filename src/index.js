import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
