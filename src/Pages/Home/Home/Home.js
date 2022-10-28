import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SummaryCard from '../../Shared/SummaryCard/SummaryCard';


const Home = () => {
    const course = useLoaderData();
    return (
        <div className='home-container mt-5' >
          
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