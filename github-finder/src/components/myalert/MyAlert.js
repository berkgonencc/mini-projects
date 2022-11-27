import React, { useContext } from "react";
import { Container, Alert } from "react-bootstrap";
import { AppContext } from "../../contexts/AppContext";

const MyAlert = () => {
  const context = useContext(AppContext);
  if (context.show) {
    return (
      <>
        {context.alert != null && (
          <Container className="mt-3">
            <Alert
              onClose={() => {
                context.setShow(false);
              }}
              variant={context.alert.type}
              dismissible
            >
              {context.alert.msg}
            </Alert>
          </Container>
        )}
      </>
    );
  }
  return <></>;
};

export default MyAlert;
