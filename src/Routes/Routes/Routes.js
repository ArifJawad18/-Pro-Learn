import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import Blog from "../../Pages/Blog/Blog";
import Faq from "../../Pages/Faq/Faq";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";

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
                path: '*',
                element:<div> Sorry, We Couldn't Find This Page 404</div>
              },

        ]
    }

])