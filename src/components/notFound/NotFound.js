import React from 'react'
import { Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div
      className="notFound"
      style={{ "text-align": "center", padding: "20px", color: "#f73149" }}
    >
      <h2>Sorry, the page you're looking for does not exist.</h2>
      <Button href='/'>Back to Home</Button>
    </div>
  );
}

export default NotFound