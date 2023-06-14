import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Blocks/Layout";
import SignUp from "../Register/SignUp";
import SignIn from "../Register/SignIn";
import Reset from "../Register/Reset";
import Password from "../Register/Password";
import Welcome from "../Pages/Welcome";
import Home from "../Components/Blocks/Layouts/Home";
import Intro from "../Components/Blocks/Layouts/Intro";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Intro />,
      },
      {
        path: "/sign-up",
        index: true,
        element: (
          // <RegisterPage>
            <SignUp />
          // {/* </RegisterPage> */}
        ),
      },
      {
        path: "/sign-in",
        index: true,
        element: (
          // <RegisterPage>
            <SignIn />
          // {/* </RegisterPage> */}
        ),
      },
      {
        path: "/reset",
        index: true,
        element: (
          // <RegisterPage>
            <Reset />
          // {/* </RegisterPage> */}
        ),
      },
      {
        path: "/password",
        index: true,
        element: (
          // <RegisterPage>
            <Password />
          // </RegisterPage>
        ),
      },
      {
        path: "/welcome",
        index: true,
        element: (
          // <RegisterPage>
            <Welcome />
          // </RegisterPage>
        ),
      },
      {
        path: "/home",
        index: true,
        element: <Home />,
      },
    ],
  },
]);
