import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Badge, Col, Container, Row } from "reactstrap";
import "./App.css";

import NavBar from "./components/navbar/Navbar";
import { landingPageDTO, movieDTO } from "./model/movies.model";
import routes from "./Routes/route-config";

export function App() {
  const [hide, setHide] = useState(false);

  return (
    <>
      <NavBar />

      <Container fluid>
        <Switch>
          {routes.map((routes: any) => (
            <Route
              key={routes.path}
              exact
              path={routes.path}
            >
              <routes.component />
            </Route>
          ))}
        </Switch>
      </Container>
    </>
  );
}
