import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";
import Blog from "../../Pages/Blog/Blog";
import Faq from "../../Pages/Faq/Faq";

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
            element:<News></News>
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
                path: '*',
                element:<div> Sorry, We Couldn't Find This Page 404</div>
              },

        ]
    }

])