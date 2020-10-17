import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import ImageHero from "../../assets/images/bg-campus-siglo.jpg";

export const DesktopView = () => {
  const imgHero = {
    position: "relative",
    zIndex: "-1",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="page-towers-tooltips">
      <div className="hero">
        <img className="img-fluid" style={imgHero} src={ImageHero} alt="" />
        <div className="containerPoints">
          <Link to="/posters">
            <div className="spinner point1">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
              <div className="popup">
                <h2 className="title">ANFITEATRO</h2>
                <p className="sub-title">Posters</p>
                <p className="description">
                  Some of the country’s biggest companies have set targets to
                  make up for a lack of Black workers.
                </p>
                <button type="button" className="btn btn-arrow">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </Link>
          <Link to="/empresas">
            <div className="spinner point2">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
              <div className="popup">
                <h2 className="title">CLUB ESTUDIANTIL</h2>
                <p className="sub-title">Empresas</p>
                <p className="description">
                  Some of the country’s biggest companies have set targets to
                  make up for a lack of Black workers.
                </p>
                <button type="button" className="btn btn-arrow">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </Link>
          <Link to="/presentacion-oportunidades">
            <div className="spinner point3">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
              <div className="popup">
                <h2 className="title">ESCUELA DE NEGOCIOS</h2>
                <p className="sub-title">Presentación de Oportunidades</p>
                <p className="description">
                  Some of the country’s biggest companies have set targets to
                  make up for a lack of Black workers.
                </p>
                <button type="button" className="btn btn-arrow">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </Link>
          <Link to="/rondas-vinculacion">
            <div className="spinner point4">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
              <div className="popup">
                <h2 className="title">EDIFICIO ARCOR</h2>
                <p className="sub-title">Rondas de Vinculación</p>
                <p className="description">
                  Some of the country’s biggest companies have set targets to
                  make up for a lack of Black workers.
                </p>
                <button type="button" className="btn btn-arrow">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </Link>
          <Link to="/emprendimientos">
            <div className="spinner point5">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
              <div className="popup">
                <h2 className="title">EXPERIMENTA 21</h2>
                <p className="sub-title">Emprendimientos finalistas Feria 21</p>
                <p className="description">
                  ¡Te invitamos a ingresar y conocer los 46 proyectos
                  finalistas!
                </p>
                <button type="button" className="btn btn-arrow">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </Link>
          <Link to="/auditorio">
            <div className="spinner point6">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
              <div className="popup">
                <h2 className="title">EDIFICIO URQUIA</h2>
                <p className="sub-title">Anfiteatro</p>
                <p className="description">
                  Some of the country’s biggest companies have set targets to
                  make up for a lack of Black workers.
                </p>
                <button type="button" className="btn btn-arrow">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
