import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Category from "../../components/Category/Category";
import CheckOut from "../../components/CheckOut/CheckOut";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import PrivateRoute from "./PrivateRoute";




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
                        path: '/faq',
                        element: <FAQ></FAQ>
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
                        element: <Category></Category>,
                        loader: ({ params }) => fetch(`https://edu-hub-server-roan.vercel.app/category/${params.id}`)
                    },
                    {
                        path: '/courses/courseDetails/:id',
                        element: <CourseDetails></CourseDetails>
                    },
                    {
                        path: '/courses/category/category/:id',
                        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://edu-hub-server-roan.vercel.app/category/category/${params.id}`)
                    }

                ]
            }
        ]
    }
])