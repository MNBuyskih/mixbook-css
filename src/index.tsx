import React from 'react';
import {Sidebar} from "./app/sidebar";
import {Example} from "./app/example/example";
import {Container} from "./lib/grid/container/container";

import "./index.scss";
import {createRoot} from "react-dom/client";
import {Row} from "./lib/grid/row/row";
import {Col} from "./lib/grid/col/col";

const App = () => (
  <div>
    <Sidebar/>

    <div id={"grid"}>
      <h1>Grid</h1>

      <Example className={"text-center"}>
        <Container>
          <Row>
            <Col>
              <div className="example-container">Column</div>
            </Col>
            <Col>
              <div className="example-container">Column</div>
            </Col>
            <Col>
              <div className="example-container">Column</div>
            </Col>
            <Col>
              <div className="example-container">Column</div>
            </Col>
          </Row>
        </Container>
      </Example>
    </div>
  </div>
);

const root = document.getElementById("root");
if (root) createRoot(root).render(<App/>);
