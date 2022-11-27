import React, { useContext, useEffect, useState } from "react";
import { Form, Container, InputGroup, Button } from "react-bootstrap";
import { AppContext } from "../../contexts/AppContext";

const Search = () => {
  const context = useContext(AppContext);
  const [keyword, setKeyword] = useState("");
  useEffect(()=>{
    setKeyword("");
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    context.clearUsers();
    if (keyword === "") {
      context.initAlert("Please, fill the blank!", "danger");
      context.setShow(true);
      context.setShowClearButton(false);
    } else {
      context.searchUsers(keyword);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Container>
          <InputGroup>
            <Form.Control
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              placeholder="Search..."
            />
            <Button type="submit" className="btn btn-sm btn-warning">
              Search
            </Button>
          </InputGroup>
          {/*if showClearButton is true <div appears */}
          {context.showClearButton && (
            <div className="d-grid mt-3">
              <Button onClick={context.clearUsers} variant="danger">
                Clear Result
              </Button>
            </div>
          )}
        </Container>
      </Form>
    </>
  );
};

export default Search;
