import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlay } from "@fortawesome/free-solid-svg-icons";

import DownloadIcon from "../../assets/icons/download-icon.svg";
import CalendarIcon from "../../assets/icons/calendar-outline.svg";

export const ButtonGeneric = ({
  colorArrow = "transparent",
  bgColor,
  color,
  bgArrow,
  children,
  isDownload = false,
  isCalendar = false,
  btnWidth = "250",
  btnHeight = "48",
  fontSize = "16",
  shadow = true,
  isPlay = false,
  actionClick = null,
}) => {
  const buttonStyle = {
    maxWidth: `${btnWidth}px`,
    width: "100%",
    height: `${btnHeight}px`,
    borderRadius: "8px",
    boxShadow: `${shadow ? "0 20px 20px 0 rgba(41, 41, 41, 0.2)" : "none"}`,
    backgroundColor: `${bgColor}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "pointer",
  };

  const textButton = {
    fontFamily: "Montserrat",
    fontSize: `${fontSize}px`,
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.56",
    letterSpacing: "normal",
    color: `${color}`,
    marginRight: `${isPlay ? "0" : "8px"}`,
  };

  const containerArrow = {
    backgroundColor: `${bgArrow}`,
    color: `${colorArrow}`,
    width: "28px",
    height: "28px",
    borderRadius: "8px",
    boxShadow: "0 2px 2px 0 rgba(0, 106, 159, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  let iconButton;

  if (isDownload) {
    iconButton = <img src={DownloadIcon} alt="Download icon" />;
  } else if (isCalendar) {
    iconButton = <img src={CalendarIcon} alt="Calendar icon" />;
  } else if (isPlay) {
    iconButton = <FontAwesomeIcon icon={faPlay} />;
  } else {
    iconButton = <FontAwesomeIcon icon={faChevronRight} />;
  }

  return (
    <button
      type="button"
      onClick={actionClick}
      className="btn"
      style={buttonStyle}
    >
      <span style={textButton}>{children}</span>
      <div style={containerArrow}>{iconButton}</div>
    </button>
  );
};
