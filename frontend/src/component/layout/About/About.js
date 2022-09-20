import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
  const visitGitHub = () => {
    window.location = "https://github.com/Trina-Dasgupta";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media-exp1.licdn.com/dms/image/C5603AQGh_QvnfYylnw/profile-displayphoto-shrink_200_200/0/1594106037562?e=1668643200&v=beta&t=n1sQ0c7VboxYe1EX2a7SNUNScU8kakvAL_7HkG6TaYQ"
              alt="Founder"
            />
            <Typography>Trina Dasgupta</Typography>
            <Button onClick={visitGitHub} color="primary" >
              Visit Github
            </Button>
            <span>
              This is a Ecommerce Website made by Trina Dasgupta. It is made with MERN Stack.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/trina-dasgupta-b9834a156/"
              target="blank"
            >
              <LinkedinIcon  className="linkedinSvgIcon" />
            </a>

            <a href="https://github.com/Trina-Dasgupta" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;