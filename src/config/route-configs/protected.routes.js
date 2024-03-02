import { lazy } from "react";

export const protectedRoutes = [
    {
        title:"HOME",
        path:"/",
        component: lazy(()=>import('../../pages/nav-page/Home'))
    },
    {
        title:"APOD",
        path:"/apod",
        component: lazy(()=>import('../../pages/nav-page/Apod'))
    },
    {
        title:"BLOG",
        path:"/blog",
        component: lazy(()=>import('../../pages/nav-page/Blog'))
    },
    {
        title:"MARS",
        path:"/mars",
        component: lazy(()=>import('../../pages/nav-page/Mars'))
    },
    {
        title:"QUIZ",
        path:"/quiz",
        component: lazy(()=>import('../../pages/nav-page/Quiz'))
    }
]