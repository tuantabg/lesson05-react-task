import React from "react";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductActionPage from "./pages/ProductActionPage";

const routes = [
    {
        path : "/",
        exact : true,
        main : () => <HomePage />
    },
    {
        path : "/product-management",
        exact : false,
        main : ({match}) => <ProductPage match={match} />
    },
    {
        path : "/product/add",
        exact : false,
        main : ({history}) => <ProductActionPage history={history}/>
    },
    {
        path : "/product/:id/edit",
        exact : false,
        main : ({match, history}) => <ProductActionPage match={match} history={history} />
    },
    {
        path : "",
        exact : false,
        main : () => <NotFoundPage />
    }
];

export default routes;