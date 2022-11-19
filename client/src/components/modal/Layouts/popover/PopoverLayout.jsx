import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";


import styles from "./style.module.scss";
import animationStyles from "./animation.module.css";
import { ANIMATION_TIME } from "../../../../consts/consts";

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

export const Layout = ({ onClose, children, opened }) => {
  const contentRef = useRef();

  const [animationIn, setAnimationIn] = useState(false);


  useEffect(() => {
      document?.addEventListener('click', onClose);
      return () => {
        document.removeEventListener('click', onClose);
      }
  }, []);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <div className={styles.container} ref={contentRef} onClick = {(e) => e.stopPropagation()}>

      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        
        {children}
        
      </CSSTransition>
    </div>
  );
};