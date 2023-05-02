const ExpandIcon = ({ expanded, ...props }) => (
  <svg
    width="1.5em"
    height="1.5em"
    viewBox="0 0 61 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="11"
      y="27"
      width="38.4"
      height="6"
      fill="var(--beige)"
    />
    <circle
      cx="30"
      cy="30"
      r="28"
      stroke="var(--beige)"
      strokeWidth="4"
    />
    {!expanded && (
      <rect
        x="27"
        y="49.3999"
        width="38.4"
        height="6"
        transform="rotate(-90 27 49.3999)"
        fill="var(--beige)"
      />
    )}
  </svg>
);

export default ExpandIcon;
