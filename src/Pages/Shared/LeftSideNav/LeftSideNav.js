import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const LeftSideNav = () => {
    const[categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('categories.json')
        .then( res => res.json())
        .then(data => setCategories(data));

    },[])


    return (
        <div>
            <h4>{categories.length}</h4>
            
            <div>
    <Card style={{ width: '10rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item> {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }</ListGroup.Item>
      </ListGroup>
    </Card>
        
        </div>
        </div>

    );
};

export default LeftSideNav;