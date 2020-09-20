import React from "react";

export default (props) => {
  return function AlertDismissible() {
    const [show, setShow] = useState(true);

    return (
      <>
        <Alert show={show} variant={props.cor || "success"}>
          <Alert.Heading>{props.titulo}</Alert.Heading>
          <p>{props.mensagem}</p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              x
            </Button>
          </div>
        </Alert>
      </>
    );
  };
};
