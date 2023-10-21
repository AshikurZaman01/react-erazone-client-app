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
import Brand from './Components/Pages/Brand/Brand';
import UpdateProduct from './Components/Pages/AddProduct/UpdateProduct/UpdateProduct';
import ProductDetails from './Components/Pages/Products/ProductCard/ProductDetails/ProductDetails';
import ViewProduct from './Components/Pages/AddProduct/ViewProduct/ViewProduct';
import LatestProduct from './Components/Pages/LatestProduct/LatestProduct';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import AuthProvider from './Components/Auth/AuthProvider/AuthProvider';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element : <Products></Products>,

      },
      {
        path : "/productDetails/:id",
        element : <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:3000/erazone/${params.id}`)
        
      },
      {
        path: "/about",
        element : <About></About>
      },
    
      {
        path : "/contact",
        element : <Contact></Contact>
      },
      {
        path : "/addproduct",
        element : <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },

      {
        path : "/updateProduct/:id",
        element : <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader : ({params})=> fetch(`http://localhost:3000/erazone/${params.id}`)
      },
      {
        path : "/viewProduct/:id",
        element : <PrivateRoute><ViewProduct></ViewProduct></PrivateRoute>,
        loader : ({params}) => fetch(`http://localhost:3000/erazone/${params.id}`)

      },
      {
        path : "/categories",
        element : <Categories></Categories>,
      },
      {
        path : "/brand/:category_name",
        element : <PrivateRoute><Brand></Brand></PrivateRoute>,
        loader : ()=> fetch('http://localhost:3000/erazone')
      },
     {
      path : "/latestProduct",
      element : <LatestProduct></LatestProduct>,
      loader : ()=> fetch('http://localhost:3000/erazone')
     },
     {
      path : "/login",
      element : <Login></Login>
     },
     {
      path : "/register",
      element : <Register></Register>
     }
      
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
