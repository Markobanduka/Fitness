import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Card className="p-3">
        <Card.Body>
          <Card.Title>
            <h1>404 Not Found</h1>
          </Card.Title>
          <Button variant="btn btn-primary mt-5">
            <Link to="/">Go back</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotFoundPage;
