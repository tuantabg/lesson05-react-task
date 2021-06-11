import React from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
    {
        path : "/",
        exact : true,
        main : () => <HomePage />
    },
    {
        path : "",
        exact : false,
        main : () => <NotFoundPage />
    }
];

export default routes;