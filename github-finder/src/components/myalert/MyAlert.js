import React from "react";
import { Container, Alert } from "react-bootstrap";

const MyAlert = ({ alert, show, setShow }) => {
  {
    if (show) {
      return (
        <>
          {/*if alert != null <Container appears */}
          {alert != null && (
            <Container className="mt-3">
              <Alert
                onClose={() => {
                  setShow(false);
                }}
                variant={alert.type}
                dismissible
              >
                {alert.msg}
              </Alert>
            </Container>
          )}
        </>
      );
    }
    return <></>;
  }
};

export default MyAlert;
