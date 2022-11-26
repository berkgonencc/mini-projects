import React from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="bg-secondary">
      <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"80vh"}}>
        <h1 className="display-1 text-info">Welcome!</h1>
        <h2 className="display-5 text-black">GithubFinder</h2>
      </div>
    </Container>
  );
};

export default HomePage;
