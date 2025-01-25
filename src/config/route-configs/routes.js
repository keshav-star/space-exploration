import { lazy } from "react";

export const routes = [
    {
        name:"HOME",
        path:"/",
        component: lazy(()=>import('../../pages/nav-page/Home'))
    },
    {
        name:"APOD",
        path:"/apod",
        component: lazy(()=>import('../../pages/nav-page/Apod'))
    },
    {
        name:"BLOG",
        path:"/blog",
        component: lazy(()=>import('../../pages/nav-page/Blog'))
    },
    {
        name:"MARS",
        path:"/mars",
        component: lazy(()=>import('../../pages/nav-page/Mars'))
    },
    {
        name:"QUIZ",
        path:"/quiz",
        component: lazy(()=>import('../../pages/nav-page/Quiz'))
    }
]