import React from "react";
import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { LogIn } from "lucide-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        <Navbar /> <Home />{" "}
      </>
    ),
  },
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <SignUp /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
