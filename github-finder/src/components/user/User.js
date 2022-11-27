import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./user.css";

const User = ({ user }) => {
  return (
    <Col md={3} className="mb-2">
      <Card>
        <Card.Img src={user.avatar_url} />
        <Col xs={8} md={10}>
          <Card.Body>
            <Card.Title>
              <h5 className="display-6">{user.login}</h5>
            </Card.Title>
            <a href={user.html_url} className="btn btn-sm btn-primary me-2">
              Github
            </a>
            <NavLink to={`/getuser/${user.login}`} className="btn btn-sm btn-warning">
              Details
            </NavLink>
          </Card.Body>
        </Col>
      </Card>
    </Col>
  );
};

export default User;
