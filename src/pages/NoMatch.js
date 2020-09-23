import React from "react";
import { Col, Row, Container, Card } from "mdbreact";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Card>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
