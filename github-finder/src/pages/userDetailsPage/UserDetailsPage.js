import React, { useContext, useEffect } from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

const UserDetailsPage = () => {
  const context = useContext(AppContext);
  const { login } = useParams();
 
  useEffect(() => {
    context.getUser(login);
  }, []);
  return (
    <Container className="mt-3">
      <Card>
        <Row>
          <Col xs={4}>
            <Card.Img
              className="d-flex align-items-center m-3 rounded-4"
              variant="top"
              src={context.user.  avatar_url}
            />
          </Col>
          <Col xs={8}>
            <Card.Header className="mt-3 me-3">
              <h1 className="display-6 text-info fw-bold mb-0">
                {context.user.login}
              </h1>
            </Card.Header>
            <Card.Body className="pb-0">
              <p className="p-0">{context.user.bio}</p>
            </Card.Body>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Body>
              <ListGroup>
                <ListGroupItem className="d-flex align-items-center">
                  <Col xs={4}>
                    <h6 className="m-0">Location</h6>
                  </Col>
                  <Col xs={1}>
                    <h6 className="text-center">:</h6>
                  </Col>
                  <Col xs={7}>
                    <span>{context.user.location}</span>
                  </Col>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <Col xs={4}>
                    <h6 className="m-0">Followers</h6>
                  </Col>
                  <Col xs={1}>
                    <h6 className="text-center">:</h6>
                  </Col>
                  <Col xs={7}>
                    <span>{context.user.followers}</span>
                  </Col>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <Col xs={4}>
                    <h6 className="m-0">Following</h6>
                  </Col>
                  <Col xs={1}>
                    <h6 className="text-center">:</h6>
                  </Col>
                  <Col xs={7}>
                    <span>{context.user.following}</span>
                  </Col>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <Col xs={4}>
                    <h6 className="m-0">Blog</h6>
                  </Col>
                  <Col xs={1}>
                    <h6 className="text-center">:</h6>
                  </Col>
                  <Col xs={7}>
                    <span>
                      <a
                        href={context.user.blog}
                        className="btn btn-sm btn-outline-info"
                        target="_blank"
                      >
                        Visit Blog
                      </a>
                    </span>
                  </Col>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <Col xs={4}>
                    <h6 className="m-0">Company</h6>
                  </Col>
                  <Col xs={1}>
                    <h6 className="text-center">:</h6>
                  </Col>
                  <Col xs={7}>
                    <span>{context.user.company}</span>
                  </Col>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <Col xs={4}>
                    <h6 className="m-0">Twitter</h6>
                  </Col>
                  <Col xs={1}>
                    <h6 className="text-center">:</h6>
                  </Col>
                  <Col xs={7}>
                    <span>{context.user.twitter_username}</span>
                  </Col>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <Col xs={4}>
                    <h6 className="m-0">Github Repositories</h6>
                  </Col>
                  <Col xs={1}>
                    <h6 className="text-center">:</h6>
                  </Col>
                  <Col xs={7}>
                    <a
                      className="btn btn-sm btn-outline-info"
                      href={context.user.repos_url}
                      target="_blank"
                    >
                      Repos
                    </a>
                  </Col>
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center">
                  <div className="d-grid w-100">
                    <a
                      href={context.user.html_url}
                      className="btn btn-sm btn-warning"
                      target="_blank"
                    >
                      Github Profile
                    </a>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default UserDetailsPage;
