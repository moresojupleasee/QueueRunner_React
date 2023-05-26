import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.tsx';
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import { QueuePage } from './containers/index.js';


const router = createBrowserRouter([
    {
      path:'/',
      element: <App/>
    },
    {
      path:'/queue',
      element: <QueuePage/>
    }
  ]);
  

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));


