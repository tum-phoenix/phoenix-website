import './style.css';
import { useState } from "react";

const count = { val: 2 };
export { count };

function BG(props) {
  useState(() => {
    count.val += 1;
  });

  const { children } = props;

  return (
    <div className={count.val % 4 === 0 ? "dark_bg" : "light_bg"}>
      <div className="center small">
        {children}
      </div>
    </div>
  );
}

export default BG;
