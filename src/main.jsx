import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Comic from "./pages/Comic";
import ForgotPassword from "./pages/ForgotPassword";
import Navbar from "./components/Navbar";
import "./App.css";
import "./index.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/Comic" element={<Comic />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Route>
  )
);



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);