import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import PremiumCourse from "../../Pages/CourseDetails/PremiumCourse";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home/Home";

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
                path: '/category/:id',
                element: <Category></Category>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
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
                element: <PremiumCourse></PremiumCourse>,
                loader: ({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    }
])