import "./App.css";
import React from "react";

import Dashboard from "./layouts/Dashboard"; // Div içine yazdığını import etmeyi unutma

import { Container } from "semantic-ui-react";

import { ToastContainer } from "react-toastify";
import Navi from "./layouts/Navi";
import Login from "./pages/Login";

function App() {
  return (
    <div>
     <Container   >
        <Navi  />
      </Container>
      <Container className="bosluk" >
        <Dashboard  />
      </Container>
    </div>
  );
}

export default App;
/* <Container   >
        <Navi  />
      </Container>
      <Container className="bosluk" >
        <Dashboard  />
      </Container>*/