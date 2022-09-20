import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:trinadasgupta.verified@gmail.com">
        <Button>Contact: trinadasgupta.verified.com</Button>
      </a>
    </div>
  );
};

export default Contact;