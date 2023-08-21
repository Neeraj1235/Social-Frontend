import React from "react";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";

function LongPlaceHolder() {
  return (
    <>
      <Placeholder as={Card.Title} animation="wave">
        <Placeholder xs={4} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="wave">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
        <Placeholder xs={6} /> <Placeholder xs={8} />
        <Placeholder xs={12} />
      </Placeholder>
      <Placeholder as={Card.Title} animation="wave">
        <Placeholder xs={4} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="wave">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder as={Card.Title} animation="wave">
        <Placeholder xs={4} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="wave">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
    </>
  );
}

export default LongPlaceHolder;
