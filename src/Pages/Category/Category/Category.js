import React from 'react';
import { useLoaderData } from 'react-router-dom';
import News from '../../News/News/News';



const Category = () => {
    const course =useLoaderData();
    return (
        <div className='mt-4'>
           {
                course.map(news=> <News
                    key={news.id}
                    news={news}
                ></News>)
            }
          
        </div>
    );
};

export default Category;