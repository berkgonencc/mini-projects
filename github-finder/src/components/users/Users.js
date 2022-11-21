import React from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../loading/Loading";
import User from "../user/User";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <Container>
        <Row className="mt-3">
          {users.map((u) => (
            <User user={u} key={u.id} />
          ))}
        </Row>
      </Container>
    );
  }
};

export default Users;
