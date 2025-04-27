import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import css from "./ToastMain.module.css";
import PropTypes from "prop-types";

export default function ToastMain({
  setToast,
  message,
  duration = 3000,
  // التخصيصات الأساسية
  type = "default",
  position = "bottom-right",
  showCloseButton = true,
  showProgressBar = true,
  pauseOnHover = true,
  // خيارات تخصيص الألوان
  backgroundColor,
  textColor,
  progressColor,
  closeBtnColor,
}) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // تحديد الأنماط حسب النوع
  const getTypeStyles = () => {
    const types = {
      default: {
        bg: "#333",
        color: "#fff",
        progressColor: "#000",
        closeColor: "#fff",
      },
      success: {
        bg: "#10b981",
        color: "#fff",
        progressColor: "#059669",
        closeColor: "#fff",
      },
      error: {
        bg: "#ef4444",
        color: "#fff",
        progressColor: "#dc2626",
        closeColor: "#fff",
      },
      warning: {
        bg: "#f59e0b",
        color: "#fff",
        progressColor: "#d97706",
        closeColor: "#fff",
      },
      info: {
        bg: "#3b82f6",
        color: "#fff",
        progressColor: "#2563eb",
        closeColor: "#fff",
      },
    };
    return types[type] || types.default;
  };

  // الحصول على النمط النهائي مع مراعاة التخصيصات المخصصة
  const getStyles = () => {
    const baseStyles = getTypeStyles();
    return {
      bg: backgroundColor || baseStyles.bg,
      color: textColor || baseStyles.color,
      progressColor: progressColor || baseStyles.progressColor,
      closeColor: closeBtnColor || baseStyles.closeColor,
    };
  };

  const finalStyles = getStyles();

  // تحديد الموضع
  const getPositionClass = () => {
    const positions = {
      "top-right": css.positionTopRight,
      "top-left": css.positionTopLeft,
      "bottom-right": css.positionBottomRight,
      "bottom-left": css.positionBottomLeft,
      "top-center": css.positionTopCenter,
      "bottom-center": css.positionBottomCenter,
    };
    return positions[position] || positions["bottom-right"];
  };

  // بدء شريط التقدم وتحديثه
  useEffect(() => {
    if (!showProgressBar) return;

    const startDelay = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setProgress((prevProgress) => {
            const newProgress = prevProgress + 100 / (duration / 100);
            if (newProgress >= 100) {
              clearInterval(intervalRef.current);
              handleClose();
              return 100;
            }
            return newProgress;
          });
        }
      }, 100);
    }, 300);

    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [duration, isPaused, showProgressBar]);

  // التعامل مع إغلاق الإشعار
  const handleClose = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setToast(false);
      }, 100);
    }, 250);
  };

  // التعامل مع إيقاف التقدم مؤقتًا
  const handlePause = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  // استئناف التقدم
  const handleResume = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div
      className={`${css.toastContainer} ${getPositionClass()} ${
        exiting ? css.exit : css.enter
      }`}
    >
      <div
        className={css.toastBody}
        style={{
          backgroundColor: finalStyles.bg,
          color: finalStyles.color,
        }}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
        <div className={css.messageContainer}>{message}</div>
        {showCloseButton && (
          <span
            onClick={handleClose}
            className={css.closeBtn}
            style={{
              color: finalStyles.closeColor,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={css.icon}
            >
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
        )}
      </div>
      {showProgressBar && (
        <div className={css.progressBarContainer}>
          <div
            className={css.progressBar}
            style={{
              width: `${progress}%`,
              backgroundColor: finalStyles.progressColor,
            }}
          />
        </div>
      )}
    </div>,
    document.body
  );
}

ToastMain.propTypes = {
  setToast: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,

  type: PropTypes.oneOf(["default", "success", "error", "warning", "info"]),
  position: PropTypes.oneOf([
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
    "top-center",
    "bottom-center",
  ]),

  showCloseButton: PropTypes.bool,
  showProgressBar: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  progressColor: PropTypes.string,
  closeBtnColor: PropTypes.string,
};
