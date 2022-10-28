import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../../Shared/SummaryCard/SummaryCard';

const Home = () => {
    const course = useLoaderData();
    return (
        <div >
            <h1>Home:{course.length}</h1>
          
            {
                course.map(news=> <SummaryCard
                    key={news.id}
                    news={news}
                ></SummaryCard>)
            }
       
        </div>
        
    );
};

export default Home;