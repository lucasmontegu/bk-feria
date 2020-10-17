import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const CardItem = ({
  CardImage,
  CompanyName,
  ShortDescription = "",
  Category,
  Id,
  Overlay = false,
}) => {
  let location = useLocation();
  const url = location.pathname;

  const bgImageCard = {
    background: `url(${CardImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "200px",
  };

  return (
    <div className="card">
      <Link
        to={{
          pathname: `${url}/${Id}`,
        }}
      >
        <div
          className={
            Overlay ? "content-image-card overlay-image" : "content-image-card"
          }
        >
          <div className="item-image-card" style={bgImageCard}></div>
        </div>
      </Link>
      <div className="card-body">
        <div className="container-tag">
          <span className="tag">{Category}</span>
        </div>
        <h2 className="name-company">{CompanyName}</h2>
        <div className="footer-card">
          <span className="origin-company">{ShortDescription}</span>
          <Link
            to={{
              pathname: `${url}/${Id}`,
            }}
          >
            <button type="button" className="btn btn-arrow">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
