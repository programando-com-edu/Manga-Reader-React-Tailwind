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
import ComicsRead from "./pages/ComicsRead";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Comic from "./pages/Comic";
import Chapter from "./pages/Chapter";
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
        <Route path="/comics-read" element={<ComicsRead />} />
        <Route path="/products" element={<Products />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/comic/:comicId" element={<Comic />} />
        <Route path="/chapter/:chapId" element={<Chapter />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Route>
  )
);



createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);