import React from "react";
import { Layout } from "../../components/layouts";
import { isMobile } from "react-device-detect";
import { SwiperSlide } from "swiper/react";

import {
  ButtonsNavigation,
  InputSearch,
  CardItem,
  Carousel,
} from "../../components/common";

import { empresas } from "../../data/empresas";

export const ListadoEmpresas = () => {
  return (
    <Layout>
      <div className="PageList top-bg ListBusiness">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="HeaderList">
                <h2 className="TitleList">Bienvenidos al edificio Empresas!</h2>
                <p className="DescriptionList">
                  But preliminary findings from environmental testing at the
                  plant have debunked the theory that the route of transmission
                  was through chilled
                </p>
              </div>
              <div className="SearchList">
                <div className="CategoriesFilter">
                  <button type="button" className="btn LabelCategory active">
                    <span>Nacional</span>
                  </button>

                  <button type="button" className="btn LabelCategory">
                    <span>Innovación</span>
                  </button>

                  <button type="button" className="btn LabelCategory">
                    <span>Salud</span>
                  </button>

                  <button type="button" className="btn LabelCategory">
                    <span>Turismo</span>
                  </button>
                </div>
                <div className="SearchFilter">
                  <InputSearch />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="CarouselList">
          <Carousel
            PerView={isMobile ? 1.5 : 3.5}
            Loop={isMobile ? true : false}
            centerSlide={isMobile ? true : false}
          >
            {empresas.map((data, key) => {
              return (
                <SwiperSlide key={key}>
                  <CardItem
                    CardImage={data.imagen}
                    CompanyName={data.nombre}
                    Category={data.categoria}
                    ShortDescription={data.descripcionCorta}
                    Id={data.id}
                  />
                </SwiperSlide>
              );
            })}
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
