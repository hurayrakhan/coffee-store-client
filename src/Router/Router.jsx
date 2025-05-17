import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import AddCoffee from "../Components/AddCoffee";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addCoffee',
                element: <AddCoffee></AddCoffee>
            }
        ]
    }
])

export default router;