import './style.css';

function Logo(props) {
  const { src } = props;

  return (
    <img
      className="logo"
      src={`logos/${src}`}
      alt={`Logo of ${src.split(".")[0]}`}
    />
  );
}

export default Logo;
