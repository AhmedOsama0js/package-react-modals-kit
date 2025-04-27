import React from "react";
import MainModal from "../MainModal/MainModal";
import css from "../ConfirmationModal/ConfirmationModal.module.css";
import PropTypes from "prop-types";

export function BodyConfirmationModal({
  msg,
  onConfirm,
  setModel,
  confirmText,
  cancelText,
  confirmBtnColor,
  cancelBtnColor,
  messageColor,
}) {
  const text = msg || "Are you sure you want to do this?";

  const NoHandler = () => {
    setModel(false);
  };

  const handlePopup = async () => {
    try {
      await onConfirm();
      setModel(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={css.bodyDelete}>
      <p className={css.title} style={{ color: messageColor }}>
        {text}
      </p>
      <div className={css.btns}>
        <button
          className={css.cancelBtn}
          onClick={NoHandler}
          style={{ backgroundColor: cancelBtnColor }}
        >
          {cancelText}
        </button>
        <button
          className={css.confirmBtn}
          onClick={handlePopup}
          style={{ backgroundColor: confirmBtnColor }}
        >
          {confirmText}
        </button>
      </div>
    </div>
  );
}

export default function ConfirmationModal({
  setModel,
  onConfirm,
  message,
  confirmText = "yes",
  cancelText = "no",
  confirmBtnColor = "#16792dd5",
  cancelBtnColor = "#da2739d3",
  closeOnOverlayClick = true,
  bodyColor = "#fff",
  messageColor = "#000",
}) {
  return (
    <MainModal
      setModel={setModel}
      content={
        <BodyConfirmationModal
          msg={message}
          onConfirm={onConfirm}
          setModel={setModel}
          confirmText={confirmText}
          cancelText={cancelText}
          confirmBtnColor={confirmBtnColor}
          cancelBtnColor={cancelBtnColor}
          messageColor={messageColor}
        />
      }
      closeOnOverlayClick={closeOnOverlayClick}
      bodyColor={bodyColor}
    />
  );
}

ConfirmationModal.propTypes = {
  setModel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  closeOnOverlayClick: PropTypes.bool,
  bodyColor: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  messageColor: PropTypes.string,
  confirmBtnColor: PropTypes.string,
  cancelBtnColor: PropTypes.string,
};
