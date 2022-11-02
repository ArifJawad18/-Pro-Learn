import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import '../SummaryCard/SummaryCard.css'
import { FaStar } from "react-icons/fa";





const SummaryCard = ({news}) => {
    const {id, title, picture, number, name} = news
    console.log(news)
    return (
       
        <div className="activity-container mb-3">
        <div className="home-container">
        
            <Card  style={{ width: '17rem' }}>
            <div className='product'>
      <Card.Img variant="top" src={picture} />
      </div>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {
          title.length > 200 ?
          <p>{title.slice(0, 250) + '...'} <Link to={`/news/${id}`}>Read more</Link></p>
          :
          <p>{title}</p>
        }
        </Card.Text>
        <Link to={`/news/${id}`}>
          <Button variant="primary">Read more</Button>
          </Link>
      </Card.Body>
     
      <Card.Footer>
          <div>
        <FaStar className='text-warning'></FaStar>
        <span>{number}</span>
          </div>
        </Card.Footer>
    </Card>
</div>
</div>







    );
};

export default SummaryCard;