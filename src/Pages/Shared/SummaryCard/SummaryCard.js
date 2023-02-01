import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../SummaryCard/SummaryCard.css";

const SummaryCard = ({ news }) => {
  const { id, title, picture, name } = news;
  console.log(news);
  return (
    <div className="activity-container ">
      <div className="home-container">
        <Card style={{ width: "17rem" }}>
          <div className="product">
            <img
              src={picture}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
          </div>

          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {title.length > 200 ? (
                <p>
                  {title.slice(0, 250) + "..."}{" "}
                  <Link to={`/news/${id}`}>Read more</Link>
                </p>
              ) : (
                <p>{title}</p>
              )}
            </Card.Text>
            <Link to={`/news/${id}`}>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-sky-600 text-gray-50"
              >
                Read more
              </button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SummaryCard;
