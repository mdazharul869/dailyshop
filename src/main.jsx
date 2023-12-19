import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import AdminApp from "./component/Admin--Panel/AdminApp";
import AdminDasbord from "./component/Admin--Panel/component/Dasbord--admin/AdminDasbord";
import AllProductPage from "./component/Admin--Panel/pages/AllProducts/AllProductpage";
import { MainAllproduct } from "./component/Admin--Panel/pages/AllProducts/MainAllProduct";
import Alluserspage from "./component/Admin--Panel/pages/AllUser/Alluserspage";
import { MainAllUser } from "./component/Admin--Panel/pages/AllUser/MainAllUser";
import ConformOrder from "./component/pages/CartItem/ConformOrder/ConformOrder";
import { MainConfrom } from "./component/pages/CartItem/ConformOrder/MainConfrom";
import { MainShipping } from "./component/pages/CartItem/Shipping/MainShipping";
import ShippingPage from "./component/pages/CartItem/Shipping/ShippingPage";
import CategoryPage from "./component/pages/CategoryPage/CategoryPage";
import MainCategoryPage from "./component/pages/CategoryPage/MainCategoryPage";
import FreeDalivariPage from "./component/pages/FreeDelevari/FreeDalivariPage";
import MainFreeDalivariPage from "./component/pages/FreeDelevari/MainFreeDalivariPage";
import HomeHeader from "./component/pages/HeaderCustom/HomeHeader";
import Home from "./component/pages/Home/Home";
import LoginPage from "./component/pages/Login/LoginPage";
import { MainLogin } from "./component/pages/Login/MainLogin";
import AllOrderPRoduct from "./component/pages/Order/AllOrderPRoduct";
import MainOrderPage from "./component/pages/Order/MainOrderPage";
import MainProductDiatlsPage from "./component/pages/ProductDitalsPage/MainProductDiatlsPage";
import ProductDitalsPage from "./component/pages/ProductDitalsPage/ProductDitalsPage";
import { MainRagestation } from "./component/pages/Regestation/MainRagestation";
import Ragestationpage from "./component/pages/Regestation/Ragestationpage";
import SubCategoryPage from "./component/pages/SubCategoryPage/SubCategoryPage";
import SubMainCategoryPage from "./component/pages/SubCategoryPage/SubMainCategoryPage";
import ErrorPage from "./errorpage/ErrorPage";
import "./index.css";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage />,
    children:[
      {
        path : "/",
        element : <Home />
    
      },

    ]

    
  },

  {
    path: "/category/:name",
    element: <MainCategoryPage />,
    children:[
      {
        path : "/category/:name",
        element : <CategoryPage />
    
      },

    ]
    
  },
  {
    path: "/dalivari/:name",
    element: <MainFreeDalivariPage />,
    children:[
      {
        path : "/dalivari/:name",
        element : <FreeDalivariPage />
    
      },

    ]
    
  },

  {
    path: "/subcategory/:name",
    element: <SubMainCategoryPage />,
    children:[
      {
        path : "/subcategory/:name",
        element : <SubCategoryPage />
    
      },

    ]
    
  },
  {
    path : "/ditals-products/:name/:id",
    element : <MainProductDiatlsPage />,
    children : [
      {
        path: "/ditals-products/:name/:id",
        element : <ProductDitalsPage />
      }
    ]
  },

  {
    path : "/account/login",
    element : <MainLogin />,
    children : [
      {
        path: "/account/login",
        element : <LoginPage />
      }
    ]
  },

  {
    path : "/create-acoount/my",
    element : <MainRagestation />,
    children : [
      {
        path: "/create-acoount/my",
        element : <Ragestationpage />
      }
    ]
  },
  {
    path : "/confrom/order",
    element : <MainConfrom />,
    children : [
      {
        path: "/confrom/order",
        element : <ConformOrder />
      }
    ]
  },
  {
    path : "/shipping/ditals",
    element : <MainShipping />,
    children : [
      {
        path: "/shipping/ditals",
        element : <ShippingPage />
      }
    ]
  },


  {
    path : "/order",
    element : <MainOrderPage />,
    children : [
      {
        path: "/order",
        element : <AllOrderPRoduct />
      }
    ]
  },

  //admin Pannel Router Md Azharul
  {
    path : "/admin/dasbord",
    element : <AdminApp />,
    children : [
      {
        path : "/admin/dasbord",
        element : <AdminDasbord />,
      }
    ]
   
  },

  {
    path : "/admin/users",
    element : <MainAllUser />,
    children : [
      {
        path : "/admin/users",
        element : <Alluserspage />,
      },

    ]
   
  },

  {
    path : "/admin/products",
    element : <MainAllproduct />,
    children : [
      {
        path : "/admin/products",
        element : <AllProductPage />,
      },

    ]
   
  },
  
  // custom desain 

  {
    path : "/headerCustom",
    element : <HomeHeader />,
  }
  
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);