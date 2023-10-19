import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Home/Home';
import About from './Components/Pages/About/About';
import Products from './Components/Pages/Products/Products';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import Categories from './Components/Categories.jsx/Categories';
import AddProduct from './Components/Pages/AddProduct/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element : <Products></Products>  
      },
      {
        path: "/about",
        element : <About></About>
      },
      {
        path : "/blog",
        element : <Blog></Blog>
      },
      {
        path : "/contact",
        element : <Contact></Contact>
      },
      {
        path : "/addproduct",
        element : <AddProduct></AddProduct>
      },
      {
        path : "/categories",
        element : <Categories></Categories>,
        loader : ()=>fetch("/category.json")
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
