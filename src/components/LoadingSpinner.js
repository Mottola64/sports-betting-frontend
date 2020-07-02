import React from "react";
import { Spinner } from "reactstrap";

const LoadingSpinner = (props) => {
  return (
    <Spinner style={{ width: "10rem", height: "10rem", marginTop: "30%" }} />
  );
};

export default LoadingSpinner;