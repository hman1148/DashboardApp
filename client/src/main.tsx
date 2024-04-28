import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Home from './Home.tsx'
import {RouterProvider, createHashRouter} from "react-router-dom"

import './index.css'
import { Router } from '@remix-run/router'


const router:Router = createHashRouter([
  {
    path: "/",
    element: <Home />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
