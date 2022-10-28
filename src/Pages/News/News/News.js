import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaClock, FaVideo } from "react-icons/fa";


const News = () => {
    const course = useLoaderData();
    console.log(course)
    const {name, } = course;
    return (
        <div>
            <h1>{name}</h1>

            <Card className='mt-5 m-5'>
        <Card.Img variant="top" src="https://img.freepik.com/premium-vector/letter-c-font-made-from-binary-code-digits-dark-blue-background_601748-29916.jpg?w=740"/>
        <Card.Body>
          <Card.Text>
            <h4>Introduction to C </h4>
          <p> In this module, you will learn about applications in different fields such as health care, banking, telecommunication, and so on. You will get a general overview of Machine Learning topics such as supervised vs unsupervised learning, and the usage of each algorithm. Also, you understand the advantage of using Python libraries for implementing Machine Learning models.</p>
          </Card.Text>
          <Link to={`/login`}>
          <Button variant="primary">GET PREMIUM ACCESS</Button>
          </Link>
          <p><span className="text-primary">Price: </span><span>100$</span></p>
          <div className="mt-2">
            <p><span><FaVideo></FaVideo></span> <span>4 videos</span></p>
            <p className=" mt-2"><span><FaClock></FaClock></span> <span>2 hour</span> </p>
        </div>
        </Card.Body>
        
      </Card>
      
        </div>
    );
};

export default News;