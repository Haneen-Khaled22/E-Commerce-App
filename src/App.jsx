import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductDetails from "./Pages/ProductDetails";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";
import Store from "./redux/store";
import Cart from "./Pages/Cart";
import Favourites from "./Pages/Favourites";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductsWithThunk from "./Pages/ProductsWithThunk";
import FormLogin from "./Components/Form/FormLogin";
import Login from "./Pages/Login";
import Rjester from "./Pages/Register";
import Register from "./Pages/Register";

import AddProduct from "./Components/Form/AddProject";
import { Toaster } from "react-hot-toast";
import LogContext from "./contexts/logContext";
import ProtectedRoute from "./Components/ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <ProtectedRoute><Home /></ProtectedRoute> },
      // { path: "products", element: <Products /> },
      {
        path: "account",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
      },
      {
        path: "contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
      },
      {
        path: "products/:id",
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "fav",
        element: (
          <ProtectedRoute>
            <Favourites />
          </ProtectedRoute>
        ),
      },
      {
        path: "productswiththunk",
        element: (
          <ProtectedRoute>
            <ProductsWithThunk />
          </ProtectedRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "addproduct",
        element: (
          <ProtectedRoute>
            <AddProduct />{" "}
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={Store}>
        <QueryClientProvider client={queryclient}>
          <ThemeProvider>
            <LogContext>
              <LanguageProvider>
                <RouterProvider router={routes} />
              </LanguageProvider>
            </LogContext>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
      <Toaster />
    </>
  );
}

export default App;
