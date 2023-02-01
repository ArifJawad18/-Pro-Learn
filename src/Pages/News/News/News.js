import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaClock, FaVideo } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const course = useLoaderData();
  console.log(course);
  const { name } = course;
  return (
    <div>
      <h1>{name}</h1>

      <Card className="mt-5 m-5">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>
            <h4>Introduction to C </h4>
            <p>
              {" "}
              In this module, you will learn about applications in different
              fields such as health care, banking, telecommunication, and so on.
              You will get a general overview of Machine Learning topics such as
              supervised vs unsupervised learning, and the usage of each
              algorithm. Also, you understand the advantage of using Python
              libraries for implementing Machine Learning models.
            </p>
          </Card.Text>
          <Link to={`/login`}>
            <Button variant="primary">GET PREMIUM ACCESS</Button>
          </Link>
          <p>
            <span className="text-primary">Price: </span>
            <span>100$</span>
          </p>
          <div className="mt-2">
            <p>
              <span>
                <FaVideo></FaVideo>
              </span>{" "}
              <span>4 videos</span>
            </p>
            <p className=" mt-2">
              <span>
                <FaClock></FaClock>
              </span>{" "}
              <span>2 hour</span>{" "}
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
