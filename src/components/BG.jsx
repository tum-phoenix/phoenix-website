import '../pages/home/style.css';

function BG(props) {
  const { children, dark } = props;

  return (
    <div className={dark === "false" ? "light_bg" : "dark_bg"}>
      <div className="paddedMiddle small">
        {children}
      </div>
    </div>
  );
}

export default BG;
