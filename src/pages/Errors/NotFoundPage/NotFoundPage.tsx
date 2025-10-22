import { Link } from "react-router-dom";
import "./NotFoundPage.css";

type NotFoundPageProps = {
  id?: string;
};

const NotFoundPage: React.FC<NotFoundPageProps> = ({ id }) => {
  return (
    <div id={id}>
      <h1>404 Not Found</h1>
      <hr />
      <div id="error-msg-wrapper">
        <p>Looks like you took a wrong turn. This page doesn’t exist.</p>
        <p>
          Click{" "}
          <i>
            <span>
              <Link to="/">here</Link>
            </span>
          </i>{" "}
          to go immediately to the Home page.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
