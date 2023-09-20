import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Dashboard from "../layouts/Dashboard";
import DashBoards from "../pages/DashBoards/DashBoards";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
          element: <Products></Products>,
        loader:()=>fetch("https://dummyjson.com/products")
      },
      {
        path: "/products/:id",
        element: <Product></Product>,
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element:<DashBoards></DashBoards>
          },
          {
            path: "/dashboard/profile",
            element:<Profile></Profile>
          },
          {
            path: "/dashboard/editProfile",
            element:<EditProfile></EditProfile>
          },
        ]
      },
      
    ],
  },
]);

export default router;
