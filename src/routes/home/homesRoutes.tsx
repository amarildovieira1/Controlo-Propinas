import { HomeLayout } from "@/components/layout/home/HomeLayout";
import { IRouteProps } from "@/interfaces/routes/route";
import { Begin } from "@/Pages/home/begin/Begin";
import { Dashboard } from "@/Pages/home/dashboard/Dashboard";
import { More } from "@/Pages/home/more/More";


export const HomesRoutes : IRouteProps={
    path:'/',
    element: HomeLayout,
    visibility:'public',
    children:[
        {
            path:'/home/dashboard',
            element:Dashboard,
            visibility:'public',
        },
        {
            path:'/home/begin',
            element: Begin,
            visibility:'public',
        },
        {
            path:'/home/more',
            element:More,
            visibility:'public',
        }
    ],
};