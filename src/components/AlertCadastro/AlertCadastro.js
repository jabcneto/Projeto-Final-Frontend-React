import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default (props) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant={props.cor || "success"}>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant={`outline-${props.cor}`} >
            X
          </Button>
        </div>
        <Alert.Heading>{props.titulo}</Alert.Heading>
        <p>{props.mensagem}</p>
      </Alert>
    </>
  );
};
