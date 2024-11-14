import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Country from "./../pages/Country";
import Contact from "./../pages/Contact";
import Errorpage from './../components/Errorpage';

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <Errorpage/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default routes;
