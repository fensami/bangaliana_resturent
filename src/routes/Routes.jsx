import {createBrowserRouter,}from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import Blogs from "../Pages/BlogPage/Blogs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Menu from "../Pages/MenuPage.jsx/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {path: '/', element: <Home></Home> },
      {path: '/blogs', element: <Blogs></Blogs>},
      {path: '/contactus', element: <ContactUs></ContactUs>},
      {path: '/menu', element: <Menu></Menu>},
    ]
  },
]);