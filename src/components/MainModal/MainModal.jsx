import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import css from "./MainModal.module.css";
import PropTypes from "prop-types";

export default function MainModal({
  setModel,
  content,
  closeOnOverlayClick = true,
  bodyColor = "#fff",
  children,
}) {
  const [opening, setOpening] = useState(true);

  useEffect(() => {
    document.body.classList.add("stop-scrolling");

    return () => {
      document.body.classList.remove("stop-scrolling");
    };
  }, []);

  const handlePopup = () => {
    setModel(false);
    setOpening(false);
  };

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      handlePopup();
    }
  };

  if (!opening) return null;

  return ReactDOM.createPortal(
    <div className={css.container}>
      <div onClick={handleOverlayClick} className={css.overlay}></div>
      <div className={css.body} style={{ backgroundColor: bodyColor }}>
        <div className={css.hight}>{content || children}</div>
        <span onClick={handlePopup} className={css.btn}>
          <svg width="30" height="30" viewBox="0 0 24 24" className={css.icon}>
            <path
              fill="currentColor"
              d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 
         L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 
         L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 
         L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 
         L 4.7070312 3.2929688 z"
            ></path>
          </svg>
        </span>
      </div>
    </div>,
    document.body
  );
}

MainModal.propTypes = {
  setModel: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  closeOnOverlayClick: PropTypes.bool,
  bodyColor: PropTypes.string,
};
