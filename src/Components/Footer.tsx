import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="/icons/icon.png" alt="logo" />
        <h1>SUN CO.</h1>
      </div>
      <div className="footer-copyright">
        <p>© 2023 dot.cards text task. All rights reserved</p>
      </div>
      <div className="footer-contact">
        <a href="/">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
