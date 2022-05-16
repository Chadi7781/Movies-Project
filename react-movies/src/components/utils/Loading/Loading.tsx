import React from "react";
import { Spinner } from "reactstrap";

// import loading from "../../../../public/assets/images/loading/loading.gif";

export default function Loading(props: any) {
  return (
    // <img alt="Loading" src="/assets/images/loading/loading.gif"/>
    <Spinner>Loading...</Spinner>
  );
}
