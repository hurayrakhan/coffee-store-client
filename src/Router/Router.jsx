import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import AddCoffee from "../Components/AddCoffee";
import UpdateCoffee from "../Components/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:3000/coffees'),
                hydrateFallbackElement: <div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner loading-xl"></span>
                </div>,
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/updateCoffee/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
                hydrateFallbackElement: <div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner loading-xl"></span>
                </div>,
                element: <UpdateCoffee></UpdateCoffee>
            }

        ]
    }
])

export default router;