import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../../Shared/SummaryCard/SummaryCard';


const Home = () => {
    const course = useLoaderData();
    return (
        <div className="grid mt-5 gap-4 ml-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
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