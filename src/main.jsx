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