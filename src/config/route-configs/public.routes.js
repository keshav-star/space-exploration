import { lazy } from "react";

export const publicRoutes = [
    {
        title:"Login",
        path:"/login",
        component: lazy(()=>import('../../pages/auth/Login'))
    }
]