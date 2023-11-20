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
    <Route element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/reports" element={<Reports />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "products",
//         element: <Products />,
//       },
//       {
//         path: "reports",
//         element: <Reports />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);