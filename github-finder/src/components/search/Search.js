import React, { useState} from "react";
import { Form, Container, InputGroup, Button } from "react-bootstrap";

const Search = ({searchUsers}) => {
  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers(keyword);
  };
  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Container>
        <InputGroup>
          <Form.Control onChange={(e)=>{ setKeyword(e.target.value)}} placeholder="Search" />
          <Button type='submit'>Search</Button>
        </InputGroup>
      </Container>
    </Form>
  );
};

export default Search;
