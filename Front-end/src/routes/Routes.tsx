import React from 'react'
import PublicRoutesRoot from './PublicRoutesRoot';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { RouterProvider ,createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/Homepage';

const Routes = () => {
    const routesForPublic = [
		{
			path: "/",
			element: <PublicRoutesRoot />,
			children: [
				{
					path: "/",
					element: <Homepage />,
				},
			],
		},
        {
            path: "/login",
            element: <Login />,
        },
		{
			path: "/register",
			element: <Register />,
		}
	];

    const router = createBrowserRouter([
		...routesForPublic
	]);
  return (
    <RouterProvider router={router} />
  )
}

export default Routes