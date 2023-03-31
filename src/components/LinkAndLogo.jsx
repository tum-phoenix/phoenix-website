import '../pages/home/style.css';
import { Link } from "react-router-dom";

function LinkAndLogo(props) {
  const { src, href, title } = props;

  return (
    <Link to={href}>
      <img
        className="logo"
        src={`logos/${src}`}
        alt={`Logo of ${src.split(".")[0]}`}
        title={title}
      />
    </Link>
  );
}

export default LinkAndLogo;
