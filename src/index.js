import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { router } from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router={router} />);
