import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import PremiumCourse from "../../Pages/CourseDetails/PremiumCourse";
import Courses from "../../Pages/Courses/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=>fetch(`https://prime-tech-server.vercel.app/courses/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'FAQ',
                element: <Faq></Faq>
            },
            {
                path: '/courses/premium/:id',
                element: <PrivateRoute><PremiumCourse></PremiumCourse></PrivateRoute>,
                loader: ({params})=>fetch(`https://prime-tech-server.vercel.app/courses/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])