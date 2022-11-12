import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ({ children, parent }) => {
  const [container] = useState(() => document.createElement("div"));
  const domElement = parent? parent: document.body;

  useEffect(() => {
    domElement.appendChild(container);
    return () => {
      domElement.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container );
};

export default Portal;