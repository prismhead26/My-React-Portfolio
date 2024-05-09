// import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './Darkmode';
import Error from './pages/Error';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <About/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/portfolio',
        element: <Portfolio/>,
      },
      {
        path: '/resume',
        element: <Resume/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router}/>
)
