import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const ButtonsNavigation = () => {
  return (
    <>
      <div className="buttonsPaginations">
        <button type="button" className="btn btn-arrow" disabled>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button type="button" className="btn btn-arrow">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};
