import React, { useState } from "react";
import { Layout } from "../../components/layouts";
import { isMobile } from "react-device-detect";

import {
  ButtonsNavigation,
  InputSearch,
  CardItem,
} from "../../components/common";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import TransformacionDigital from "../../assets/icons/school.svg";
import BioEconomia from "../../assets/icons/renewable-energy.svg";
import EficienciaEnergetica from "../../assets/icons/energy.svg";
import NuevaNormalidad from "../../assets/icons/webinar.svg";

import { proyectos } from "../../data/rondas";

export const ListadoPresentacionOportunidades = () => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleFilterTwo, setToggleFilterTwo] = useState(false);

  const handleToggleFilter = (e) => {
    setToggleFilter(!toggleFilter);
  };

  const handleToggleFilterTwo = (e) => {
    setToggleFilterTwo(!toggleFilterTwo);
  };

  if (isMobile) {
    return (
      <Layout>
        <h1>Is mobile</h1>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="PageList vincularPages top-bg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 m-auto">
                <div className="HeaderList">
                  <h2 className="TitleList">
                    Bienvenidos a Rondas de Vinculación!
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
                    id="FilterEjes"
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
                    id="FilterSectors"
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
                {proyectos.map((data, key) => {
                  return (
                    <div className="mb-5 col-12 col-md-6 col-lg-4" key={key}>
                      <CardItem
                        Overlay={true}
                        CardImage={data.imagen}
                        CompanyName={data.nombre}
                        Category={data.categoria}
                        ShortDescription={data.descripcionCorta}
                        Id={data.id}
                      />
                    </div>
                  );
                })}
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
    );
  }
};
