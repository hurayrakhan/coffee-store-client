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
                loader: () => fetch('http://localhost:3000/coffees'),
                element:<Home></Home>
            },
            {
                path:'/addCoffee',
                element: <AddCoffee></AddCoffee>
            },

        ]
    }
])

export default router;