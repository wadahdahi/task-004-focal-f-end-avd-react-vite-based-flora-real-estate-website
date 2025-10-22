import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div id="maintenance-msg-page-background-wrapper">
        <img
          id="maintenance-msg-page-background"
          src="/public/images/backgrounds/construction-maintenance-background.png"
          alt=""
        />
      </div>
      <div id="maintenance-msg">
        <img
          id="maintenance-msg-box-background"
          src="/public/images/backgrounds/grid-line-pattern-with-blue-texture-background.png"
          alt=""
        />
        <img
          id="maintenance-msg-image"
          src="/public/images/misc/construction-maintenance-image.png"
          alt="construction maintenance"
          width={"120px"}
        />
        <h2 id="maintenance-msg-heading">
          This page is currently under maintenance.
        </h2>
        <p id="maintenance-msg-description">
          We appreciate your patience and understanding while we make
          improvements
        </p>
        <p id="maintenance-msg-home-page-link">
          You can click{" "}
          <i>
            <span>
              <Link id="home-page-link" to="/">
                here
              </Link>
            </span>
          </i>{" "}
          to go immediately to the Home page.
        </p>
      </div>
    </section>
  );
};

export default About;
