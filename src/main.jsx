<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
=======
import { Route, RouterProvider, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Setting from "./Pages/Settings.jsx";
import Dashboard from "./components/Desktop14/Dashboard/Dashboard.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/settings" element={<Setting />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
>>>>>>> 036f741af4a678c2db5c2a41b44f6d6552dfee68
