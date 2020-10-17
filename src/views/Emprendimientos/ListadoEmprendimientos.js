import React, { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { SwiperSlide } from "swiper/react";

import {
  ButtonsNavigation,
  InputSearch,
  CardItem,
  Carousel,
} from "../../components/common";

const API_HOST = "http://206.189.178.175";
const API_URL = "http://206.189.178.175/emprendimientos";

export const ListadoEmprendimientos = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [emprendimientos, setEmprendimientos] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const response = await fetch(API_URL);
      const resFilter = await fetch(`${API_HOST}/emprendimientos-estados`);

      const jsonresFilter = await resFilter.json();
      const jsonResponse = await response.json();

      setFilters(jsonresFilter);
      setEmprendimientos(jsonResponse);
      setLoading(false);
    };

    fetchDate();
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    const fetchDate = async () => {
      const response = await fetch(`${API_URL}?Nombre=${searchValue}`);
      const jsonResponse = await response.json();

      if (searchValue !== "") {
        setEmprendimientos(jsonResponse);
        setLoading(false);
      } else {
        setLoading(true);
        setEmprendimientos(...emprendimientos);
      }
    };

    fetchDate();
  };

  return (
    <Layout>
      <div className="PageList top-bg">
        <div className="container">
          <div>
            <div className="HeaderList">
              <h2 className="TitleList">
                Bienvenidos a Emprendimientos finalistas Feria 21!
              </h2>
              <p className="DescriptionList">
                Más de 180 proyectos fueron presentados en FERIA21 y luego de
                diferentes instancias y procesos, los mejores han llegado a la
                gran final.
              </p>
            </div>
            <div className="SearchList">
              <div className="CategoriesFilter">
                {filters.map((filter) => {
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      // onChange={handleFilter(filter.Estado)}
                      className="btn LabelCategory animate__animated animate__fadeIn"
                    >
                      <span>{filter.Estado}</span>
                    </button>
                  );
                })}
              </div>
              <div className="SearchFilter">
                <InputSearch search={search} />
              </div>
            </div>
          </div>
        </div>

        <div className="CarouselList animate__animated animate__fadeInUp">
          <Carousel>
            {loading && !errorMessage ? (
              <span>loading...</span>
            ) : errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : (
              emprendimientos &&
              emprendimientos.map((emprendimiento) => {
                return (
                  <SwiperSlide
                    className="animate__animated animate__fadeIn"
                    key={emprendimiento.id}
                  >
                    <CardItem
                      CardImage={`${API_HOST}${emprendimiento.Imagen_proyecto.formats.small.url}`}
                      CompanyName={emprendimiento.Nombre}
                      Category={emprendimiento.Estado}
                      ShortDescription={`${emprendimiento.Ciudad}, ${emprendimiento.Provincia}`}
                      Id={emprendimiento.id}
                    />
                  </SwiperSlide>
                );
              })
            )}
          </Carousel>
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
};
