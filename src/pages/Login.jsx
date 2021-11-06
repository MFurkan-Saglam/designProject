import React from "react";
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Image,
} from "semantic-ui-react";
import { ToastContainer } from "react-toastify";
import { Grid, GridRow } from "semantic-ui-react";
import logooo from "../pictures/nature.jpg";
import { Container } from "semantic-ui-react";
import "./Login.css";
const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const Login = () => (
  <div>
    <ToastContainer position="bottom-left" />
    <Grid>
      <Grid.Row>
        <Grid.Column width="8">
          <Image className="img" src={logooo}></Image>
        </Grid.Column>
        <Grid.Column className="body" width="8">
          <h1 className="PhotoGalleryText"> PhotoGallery</h1>
          <br />
          <h1 className="PhotoGalleryTextTwo"> We're glad to see you again</h1>
          <Form className="bosluk">
            <h1 className="PhotoGalleryTextThree">User Name</h1>
            <Form.Group className="input" widths="small">
              <Form.Input placeholder="User name" />
            </Form.Group>
            <h1 className="PhotoGalleryTextThree">Password</h1>
            <Form.Group widths="small">
              <Form.Input placeholder="Password" />
            </Form.Group>
            
            <Form.Group  widths="small">
              <Form.Field className="confirm"
                id="form-button-control-public"
                control={Button}
                content="Sign In"
              />
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Login;
