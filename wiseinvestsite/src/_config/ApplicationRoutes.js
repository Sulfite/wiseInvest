import {  createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Dashboard } from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },

    {
        path:"/perfil",
        element: <></>
    },
    {
        path:"/users",
        element: <></>
    },
    {
        path:"/myRecommendation",
        element: <></>
    },
    {
        path:"/Wallets",
        element: <></>
    },
    {
        path:"/brokerageNotes",
        element: <></>
    },
    {
        path:"/recommendations",
        element: <></>
    },
    {
        path:"/detailedProfitability",
        element: <></>
    }

]);