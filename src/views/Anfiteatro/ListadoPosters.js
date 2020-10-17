import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Layout } from "../../components/layouts";
// import { isMobile } from "react-device-detect";

import {
  ButtonsNavigation,
  InputSearch,
  SocialShared,
  Modal,
} from "../../components/common";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import TransformacionDigital from "../../assets/icons/school.svg";
import BioEconomia from "../../assets/icons/renewable-energy.svg";
import EficienciaEnergetica from "../../assets/icons/energy.svg";
import NuevaNormalidad from "../../assets/icons/webinar.svg";
import Avatar from "../../assets/icons/avatar-single.svg";

import Poster from "../../assets/images/posters/Template-Poster-Vincular.png";

const bgImageCard = {
  background: `url(${Poster})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  width: "100%",
  height: "200px",
};

const contentImage = {
  maxWidth: "80%",
  margin: "auto",
};

export const ListadoPosters = () => {
  const [showModal, setShowModal] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleFilterTwo, setToggleFilterTwo] = useState(false);

  const handleToggleFilter = (e) => {
    setToggleFilter(!toggleFilter);
  };

  const handleToggleFilterTwo = (e) => {
    setToggleFilterTwo(!toggleFilterTwo);
  };

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal]);

  const handleClickModal = () => {
    console.log("hizo click");
    setShowModal(true);
  };

  return (
    <>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <div className="container">
          <div className="row">
            <div className="col-10 m-auto">
              <div style={contentImage}>
                <img className="hv-75 img-fluid" src={Poster} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Layout>
        <div className="PageList vincularPages top-bg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 m-auto">
                <div className="HeaderList">
                  <h2 className="TitleList">
                    Conocé posters de grandes proyectos
                  </h2>
                  <p className="DescriptionList">
                    But preliminary findings from environmental testing at the
                    plant have debunked the theory that the route of
                    transmission was through chilled
                  </p>
                </div>
              </div>
            </div>

            <div className="cardsThematic">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="card">
                    <div className="containImage">
                      <img
                        className="img-fluid"
                        src={TransformacionDigital}
                        alt="Transformacion Digital"
                      />
                    </div>

                    <div className="containTitle">
                      <h3 className="title">Transformación Digital</h3>
                    </div>

                    <div className="containDescription">
                      <p className="description">
                        But preliminary findings from environmental testing at
                        the plant have debunked the theory that the route of
                        transmission.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="card">
                    <div className="containImage">
                      <img
                        className="img-fluid"
                        src={BioEconomia}
                        alt="BioEconomia"
                      />
                    </div>

                    <div className="containTitle">
                      <h3 className="title">Bioeconomía</h3>
                    </div>

                    <div className="containDescription">
                      <p className="description">
                        But preliminary findings from environmental testing at
                        the plant have debunked the theory that the route of
                        transmission.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="card">
                    <div className="containImage">
                      <img
                        className="img-fluid"
                        src={EficienciaEnergetica}
                        alt="Eficiencia Energetica"
                      />
                    </div>
                    <div className="containTitle">
                      <h3 className="title">Eficiencia energética</h3>
                    </div>

                    <div className="containDescription">
                      <p className="description">
                        But preliminary findings from environmental testing at
                        the plant have debunked the theory that the route of
                        transmission.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                  <div className="card">
                    <div className="containImage">
                      <img
                        className="img-fluid"
                        src={NuevaNormalidad}
                        alt="Nueva Normalidad"
                      />
                    </div>

                    <div className="containTitle">
                      <h3 className="title">Nueva normalidad</h3>
                    </div>

                    <div className="containDescription">
                      <p className="description">
                        But preliminary findings from environmental testing at
                        the plant have debunked the theory that the route of
                        transmission.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row filterOrders">
              <div className="col-12 col-md-12 col-lg-4">
                <div className="ToggleFilter">
                  <button
                    onClick={handleToggleFilter}
                    className="btn ToggleFilterButton"
                  >
                    <span className="placeholder">Filtrar por ejes</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>

                  <div
                    data-expanded-toggle
                    className={
                      toggleFilter ? "BoxListOptions" : "BoxListOptions d-none"
                    }
                  >
                    <form>
                      <label htmlFor="Demanda" className="option">
                        <div className="containerCheckboxText">
                          <input className="" type="checkbox" name="Demanda" />
                          <span className="textInputSelect">Demanda</span>
                        </div>
                        <span className="textInputSelect">05</span>
                      </label>

                      <label htmlFor="Oferta" className="option">
                        <div className="containerCheckboxText">
                          <input className="" type="checkbox" name="Oferta" />
                          <span className="textInputSelect">Oferta</span>
                        </div>
                        <span className="textInputSelect">10</span>
                      </label>

                      <label htmlFor="Metalmecánica" className="option">
                        <div className="containerCheckboxText">
                          <input
                            className=""
                            type="checkbox"
                            name="Metalmecánica"
                          />
                          <span className="textInputSelect">Metalmecánica</span>
                        </div>
                        <span className="textInputSelect">03</span>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <div className="ToggleFilter">
                  <button
                    onClick={handleToggleFilterTwo}
                    className="btn ToggleFilterButton"
                  >
                    <span className="placeholder">Filtrar por sectores</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>

                  <div
                    data-expanded-toggle
                    className={
                      toggleFilterTwo
                        ? "BoxListOptions"
                        : "BoxListOptions d-none"
                    }
                  >
                    <form>
                      <label data-active htmlFor="Demanda" className="option">
                        <div className="containerCheckboxText">
                          <input className="" type="checkbox" name="Demanda" />
                          <span className="textInputSelect">Demanda</span>
                        </div>
                        <span className="textInputSelect">05</span>
                      </label>

                      <label htmlFor="Oferta" className="option">
                        <div className="containerCheckboxText">
                          <input className="" type="checkbox" name="Oferta" />
                          <span className="textInputSelect">Oferta</span>
                        </div>
                        <span className="textInputSelect">10</span>
                      </label>

                      <label htmlFor="Metalmecánica" className="option">
                        <div className="containerCheckboxText">
                          <input
                            className=""
                            type="checkbox"
                            name="Metalmecánica"
                          />
                          <span className="textInputSelect">Metalmecánica</span>
                        </div>
                        <span className="textInputSelect">03</span>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4">
                <div className="SearchList">
                  <div className="SearchFilter">
                    <InputSearch />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="GridList">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12 mb-5">
                  <div className="card ">
                    <button
                      type="button"
                      className="btn p-0"
                      onClick={handleClickModal}
                    >
                      <div className="content-image-card">
                        <div
                          className="item-image-card"
                          style={bgImageCard}
                        ></div>
                      </div>
                    </button>
                    <div className="card-body">
                      <div className="container-tag">
                        <span className="tag">Innovación</span>
                      </div>
                      <h2 className="name-company">
                        Asistencia del Centro de Química Aplicada a proyecto de
                        Innovación y Emprendedorismo
                      </h2>
                      <div className="projectAuthor">
                        <img className="img-fluid" src={Avatar} alt="Avatar" />

                        <div className="AuthorInfo">
                          <h3 className="AuthorName">Dr. Martín Rodriguez </h3>
                          <span className="AuthorUniversity">
                            Facultad de Ciencias Químicas (UNC)
                          </span>
                        </div>
                      </div>
                      <div className="footer-card">
                        <SocialShared
                          FacebookLink="www.facebook.com"
                          TwitterLink="www.twitter.com"
                          LinkedinLink="www.linkedin.com"
                          InstagramLink="www.instagram.com"
                          YoutubeLink="www.youtube.com"
                          WebsiteLink="www.google.com"
                        />

                        <button
                          type="button"
                          onClick={handleClickModal}
                          className="btn btn-arrow"
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-5">
                  <div className="card ">
                    <button
                      type="button"
                      className="btn p-0"
                      onClick={handleClickModal}
                    >
                      <div className="content-image-card">
                        <div
                          className="item-image-card"
                          style={bgImageCard}
                        ></div>
                      </div>
                    </button>
                    <div className="card-body">
                      <div className="container-tag">
                        <span className="tag">Innovación</span>
                      </div>
                      <h2 className="name-company">
                        Asistencia del Centro de Química Aplicada a proyecto de
                        Innovación y Emprendedorismo
                      </h2>
                      <div className="projectAuthor">
                        <img className="img-fluid" src={Avatar} alt="Avatar" />

                        <div className="AuthorInfo">
                          <h3 className="AuthorName">María Clara Suárez</h3>
                          <span className="AuthorUniversity">
                            Facultad de Ciencias Químicas (UNC)
                          </span>
                        </div>
                      </div>
                      <div className="footer-card">
                        <SocialShared
                          FacebookLink="www.facebook.com"
                          TwitterLink="www.twitter.com"
                          LinkedinLink="www.linkedin.com"
                          InstagramLink="www.instagram.com"
                          YoutubeLink="www.youtube.com"
                          WebsiteLink="www.google.com"
                        />

                        <button
                          type="button"
                          onClick={handleClickModal}
                          className="btn btn-arrow"
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-12 mb-5">
                  <div className="card ">
                    <button
                      type="button"
                      className="btn p-0"
                      onClick={handleClickModal}
                    >
                      <div className="content-image-card">
                        <div
                          className="item-image-card"
                          style={bgImageCard}
                        ></div>
                      </div>
                    </button>
                    <div className="card-body">
                      <div className="container-tag">
                        <span className="tag">Innovación</span>
                      </div>
                      <h2 className="name-company">
                        Asistencia del Centro de Química Aplicada a proyecto de
                        Innovación y Emprendedorismo
                      </h2>
                      <div className="projectAuthor">
                        <img className="img-fluid" src={Avatar} alt="Avatar" />

                        <div className="AuthorInfo">
                          <h3 className="AuthorName">Dr. Martín Rodriguez </h3>
                          <span className="AuthorUniversity">
                            Facultad de Ciencias Químicas (UNC)
                          </span>
                        </div>
                      </div>
                      <div className="footer-card">
                        <SocialShared
                          FacebookLink="www.facebook.com"
                          TwitterLink="www.twitter.com"
                          LinkedinLink="www.linkedin.com"
                          InstagramLink="www.instagram.com"
                          YoutubeLink="www.youtube.com"
                          WebsiteLink="www.google.com"
                        />

                        <button
                          type="button"
                          onClick={handleClickModal}
                          className="btn btn-arrow"
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-12 mb-5">
                  <div className="card">
                    <button
                      type="button"
                      className="btn p-0"
                      onClick={handleClickModal}
                    >
                      <div className="content-image-card">
                        <div
                          className="item-image-card"
                          style={bgImageCard}
                        ></div>
                      </div>
                    </button>
                    <div className="card-body">
                      <div className="container-tag">
                        <span className="tag">Innovación</span>
                      </div>
                      <h2 className="name-company">
                        Asistencia del Centro de Química Aplicada a proyecto de
                        Innovación y Emprendedorismo
                      </h2>

                      <div className="projectAuthor">
                        <img className="img-fluid" src={Avatar} alt="Avatar" />

                        <div className="AuthorInfo">
                          <h3 className="AuthorName">María Clara Suárez</h3>
                          <span className="AuthorUniversity">
                            Facultad de Ciencias Químicas (UNC)
                          </span>
                        </div>
                      </div>
                      <div className="footer-card">
                        <SocialShared
                          FacebookLink="www.facebook.com"
                          TwitterLink="www.twitter.com"
                          LinkedinLink="www.linkedin.com"
                          InstagramLink="www.instagram.com"
                          YoutubeLink="www.youtube.com"
                          WebsiteLink="www.google.com"
                        />

                        <button
                          type="button"
                          onClick={handleClickModal}
                          className="btn btn-arrow"
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pagination">
            <div className="container">
              <div className="row">
                <div className="content-pagination">
                  <ButtonsNavigation />
                  {/*<div className="number-pagination">1 - 3 de 10</div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
