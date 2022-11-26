import React, { useState } from "react";
import { Form, Container, InputGroup, Button } from "react-bootstrap";

const Search = ({ searchUsers, clearUsers, showClearButton, initAlert, setShow }) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword === "") {
      initAlert("Please, fill the blank!", "danger");
      setShow(true);

    } else {
      searchUsers(keyword);  
      setKeyword('');

    }
  };
  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Container>
        <InputGroup>
          <Form.Control
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            placeholder="Search"
          />
          <Button type="submit">Search</Button>
        </InputGroup>
        {/*if showClearButton is true <div appears */}
        {showClearButton && (
          <div className="d-grid mt-3">
            <Button onClick={clearUsers} variant="danger">
              Clear Result
            </Button>
          </div>
        )}
      </Container>
    </Form>
  );
};

export default Search;
