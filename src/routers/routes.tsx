import React from "react";
import NotFoundPage from "../pages/notFoundPage";
import AboutPage from "../pages/aboutPage.tsx";
import HomePage from "../pages/homePage/homePage.tsx";


const routes: { path: string, name: string, component: React.ReactNode}[] = [
    {
        path: "/",
        name: "Home",
        component: <HomePage className={"home-page"}/>
    },
    {
        path: "/about",
        name: "About",
        component: <AboutPage title={"About"} className={"about-page"}/>
    },
    {
        path: "*",
        name: "notFound",
        component: <NotFoundPage/>
    },
];

export default routes;
