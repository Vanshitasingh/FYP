import { Navigate, useRoutes } from 'react-router-dom';
import  { useState, useEffect } from "react";
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
// import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router() {
//   const [data, setdata] = useState({
//     text: "",
//     reactStatus : ""
//   });


// useEffect(() => {
//   // Using fetch to fetch the api from 
//   // flask server it will be redirected to proxy
//   fetch("/data").then((res) =>
//       res.json().then((data) => {
//           // Setting a data from api
//           setdata({
//             text: data.message,
//             reactStatus: data.resultStatus,
//           });
//       })
//   );
// }, []);


  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: 'app' , element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
      ],
    },
  
  ]);

  return routes;
}