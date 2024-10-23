import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/contact",
          element: <Contact/>,
        }
      ],
    },
  ]);

export default router;