const MenuIcon = ({ expanded, ...props }) => (
  <svg
    id="menu-icon"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 24 24"
    {...props}
  >
    <line
      id="menu-line-top"
      className="menu-line"
      x1="1"
      y1="6"
      x2="23"
      y2="6"
      strokeWidth="2.4"
      vectorEffect="non-scaling-stroke"
      data-svg-origin="12 6"
      transform={expanded ? "matrix(-0.70711,-0.70711,0.70711,-0.70711,16.24266,24.72798)" : "matrix(1,0,0,1,0,0)"}
      style={{
        transformOrigin: "0px 0px",
        stroke: "var(--beige)",
      }}
    />
    <line
      id="menu-line-mid"
      className="menu-line"
      x1="1"
      y1="12"
      x2="23"
      y2="12"
      strokeWidth="2.4"
      vectorEffect="non-scaling-stroke"
      data-svg-origin="12 12"
      transform={expanded ? "matrix(-0.70711,-0.70711,0.70711,-0.70711,12,28.97064)" : "matrix(1,0,0,1,0,0)"}
      style={{
        transformOrigin: "0px 0px",
        stroke: "var(--beige)",
      }}
    />
    <line
      id="menu-line-bot"
      className="menu-line"
      x1="1"
      y1="18"
      x2="23"
      y2="18"
      strokeWidth="2.4"
      vectorEffect="non-scaling-stroke"
      data-svg-origin="12 18"
      transform={expanded ? "matrix(-0.70711,0.70711,-0.70711,-0.70711,33.2133,16.24266)" : "matrix(1,0,0,1,0,0)"}
      style={{
        transformOrigin: "0px 0px",
        stroke: "var(--beige)",
      }}
    />
  </svg>
);
export default MenuIcon;
