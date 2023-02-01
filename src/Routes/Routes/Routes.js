import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import News from "../../Pages/News/News/News";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('course.json')
            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: () => fetch('course.json')
                
            },
            {
            path:'/news/:id',
            element:<News></News>,
            loader: () => fetch('course.json')
            },
            {
                path:'/faq',
                element:<Faq></Faq>
                },
            {
            path:'/blog',
            element:<Blog></Blog>
            },
            {
            path:'/login',
            element:<Login></Login>
            },
            {
            path:'/register',
            element:<Register></Register>
            },
         
            {
            path:'*',
            element:<div> <p className="text-2xl font-semibold md:text-3xl text-center text-red-600">
            Sorry, we couldn't find this page.
          </p></div>
            },
         
        ]
    }

])