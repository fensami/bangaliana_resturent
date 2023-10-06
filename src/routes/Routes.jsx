import {createBrowserRouter,}from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import Blogs from "../Pages/BlogPage/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path: '/', element: <Home></Home> },
      {path: '/blogs', element: <Blogs></Blogs>}
    ]
  },
]);