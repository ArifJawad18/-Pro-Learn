import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import Button from 'react-bootstrap/Button';

const LeftSideNav = () => {
    const[categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then( res => res.json())
        .then(data => setCategories(data));

    },[])


    return (
        <div className='mt-5'>
            
    <Card style={{ width: '11rem' }}>
      <ListGroup variant="flush">

        <ListGroup.Item className='bg-light'> {
                    categories.map(category => <Button className='bg-light' key={category.id}>
                        <Link to={`/news/${category.id}`} >
                       {category.name}</Link>
                    </Button>)
                    
                }</ListGroup.Item>
      </ListGroup>
    </Card>
        
        </div>

    );
};

export default LeftSideNav;