import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Service from "./pages/Service/Service.tsx";
import NewProperty from "./pages/NewProperty/NewProperty.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import "./index.css";
import NotFoundPage from "./pages/Errors/NotFoundPage/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service /> },
      { path: "new-property", element: <NewProperty /> },
      { path: "contact", element: <Contact /> },
    ],
    errorElement: <NotFoundPage id="error-404-page" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
