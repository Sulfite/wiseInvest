import {  createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard";
import { Profile } from "../pages/Profile/Profile";
import { Header } from "../components/Header/Header";
import { Register } from "../pages/Register/Register";
import { Wallets } from "../pages/Wallets/Wallets";
import { BrokerageNotes } from "../pages/BrokerageNotes/BrokerageNotes";
import { Users } from "../pages/Users/Users";
import { Recommendations } from "../pages/Recommendations/Recommendations";
import { AddRecommendation } from "../pages/Recommendations/components/AddRecommendation/AddRecommendation";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

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
        path:"/myRecommendation",
        element: <Recommendations />,

        errorElement: <ErrorBoundary />
    },
    {
        path:"/myRecommendation/addIndicationRecommendation",
        element: <AddRecommendation />,
        errorElement: <ErrorBoundary />
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
                path:"profile",
                element: <Profile />,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/users",
                element: <Users />,
                errorElement: <ErrorBoundary />
            },

            {
                path:"/Wallets",
                element: <Wallets />,
                errorElement: <ErrorBoundary />
            },
            {
                path:"/brokerageNotes",
                element: <BrokerageNotes />,
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