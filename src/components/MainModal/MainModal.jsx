import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import css from "./MainModal.module.css";
import PropTypes from "prop-types";

export default function MainModal({
  setModel,
  content,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  bodyColor = "#fff",
  width = "auto",
  height = "auto",
  animationDuration = 300,
  onClose = () => {},
}) {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("stop-scrolling");

    if (modalRef.current) {
      modalRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && closeOnEsc) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("stop-scrolling");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeOnEsc]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModel(false);
      onClose();
    }, animationDuration);
  };

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      handleClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`${css.container} ${isClosing ? css.closing : css.opening}`}
      style={{ "--animation-duration": `${animationDuration}ms` }}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={handleOverlayClick}
        className={css.overlay}
        aria-hidden="true"
      ></div>
      <div
        className={css.body}
        style={{
          backgroundColor: bodyColor,
          width,
          height,
          maxWidth: "100%",
          maxHeight: "90vh",
        }}
        ref={modalRef}
        tabIndex={-1}
      >
        <div className={css.content}>{content}</div>
        <button
          onClick={handleClose}
          className={css.closeBtn}
          aria-label="close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <path
              fill="currentColor"
              d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 
                L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 
                L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 
                L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 
                L 4.7070312 3.2929688 z"
            ></path>
          </svg>
        </button>
      </div>
    </div>,
    document.body
  );
}

MainModal.propTypes = {
  setModel: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  closeOnOverlayClick: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  bodyColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  animationDuration: PropTypes.number,
  onClose: PropTypes.func,
};
