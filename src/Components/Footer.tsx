import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFigma,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-item">
        <div className="footer-logo">
          <img src="/icons/icon.png" alt="logo" />
          <a href="/">
            <h1> SUN CO.</h1>
          </a>
        </div>
        <div className="footer-copyright">
          <p>© 2023 dot.cards text task. All rights reserved</p>
        </div>
      </div>
      <div className="footer-contact">
        <a href="https://freddy990117.github.io/My_Website/">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="https://www.linkedin.com/in/lee-jay-chang-24735a266/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/freddy990117?tab=repositories">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.figma.com/design/ZBzf3sv3qJ4mmVwBnY0o1v/Project?node-id=0-1&p=f&t=mGJJoA81lN12fnSV-0">
          <FontAwesomeIcon icon={faFigma} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
