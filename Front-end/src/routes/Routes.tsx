import React from 'react'
import PublicRoutesRoot from './PublicRoutesRoot';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { RouterProvider ,createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Incidents from '../pages/Incidents';
import Error from '../pages/Error';
import NChatbot from '../pages/NChatbot';

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
				{
					path: "/incidents",
					element: <Incidents />,
				},
				{
					path: "/chatbot",
					element: <NChatbot />
				}
			],
			errorElement: <Error />
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