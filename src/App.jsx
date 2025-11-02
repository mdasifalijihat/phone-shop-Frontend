import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import Footer from "./components/Foooter/Footer";
import Profile from "./components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        <Navbar /> <Home /> <Footer />{" "}
      </>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/verify", element: <Verify /> },
  { path: "/verify/:token", element: <VerifyEmail /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: (
      <>
        {" "}
        <Navbar /> <Profile /> <Footer />{" "}
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
