import {  createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile/Profile";
import { Header } from "../components/Header/Header";
import { Register } from "../pages/Register/Register";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { Wallets } from "../pages/Wallets/Wallets";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorBoundary />,
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorBoundary />,
    },
    {
        element: <Header />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
                errorElement: <ErrorBoundary />
            },
            {
                path:"perfil",
                element: <Profile />,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/users",
                element: <></>,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/myRecommendation",
                element: <></>,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/Wallets",
                element: <Wallets />,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/brokerageNotes",
                element: <></>,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/recommendations",
                element: <></>,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/detailedProfitability",
                element: <></>,
                errorElement: <ErrorBoundary />
            }
        ],
    }
]);