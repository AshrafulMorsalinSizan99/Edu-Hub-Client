import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Category from "../../components/Category/Category";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";




import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Main></Main>,

                children: [
                    {
                        path: '/',
                        element: <Home></Home>
                    },
                    {
                        path: '/home',
                        element: <Home></Home>
                    },
                    {
                        path: '/blog',
                        element: <Blog></Blog>
                    },
                    {
                        path: '/courses',
                        element: <Courses></Courses>
                    },
                    {
                        path: '/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/register',
                        element: <Register></Register>
                    },
                    {
                        path: '/courses/category/:id',
                        element: <Category></Category>
                    },

                ]
            }
        ]
    }
])