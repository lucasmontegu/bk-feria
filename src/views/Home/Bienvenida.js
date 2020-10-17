import React from "react";
import { Link } from "react-router-dom";
import ImageHero from "../../assets/images/bg-campus-siglo.jpg";
import { ButtonGeneric } from "../../components/common";
import { Layout } from "../../components/layouts";

export const Bienvenida = () => {
  const heroImage = {
    backgroundImage: `url(${ImageHero})`,
  };

  return (
    <Layout>
      <div className="hero animate__animated animate__fadeIn" style={heroImage}>
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-lg-6">
                <div className="content-home">
                  <p>Feria académica de empleo e innovación</p>
                  <h1 className="home-title">
                    ¡Bienvenid@s a <br /> Feria 21 + Vincular!
                  </h1>
                  <p>
                    La <strong>Universidad Siglo 21</strong> y el{" "}
                    <strong>Ministerio de Ciencias y Tecnología</strong> de
                    Córdoba se unieron para que la{" "}
                    <strong>academia y el sector productivo</strong> se
                    relacionen <strong>en un evento único</strong>.
                  </p>
                  <p>
                    En cada edificio podrán recorrer diferentes propuestas de
                    cada institución ¡te invitamos a recorrerlos!
                  </p>

                  <Link to="/inicio" className="text-decoration-none">
                    <ButtonGeneric
                      bgColor="#fff"
                      color="#006a9f"
                      bgArrow="#006a9f"
                      colorArrow="#fff"
                    >
                      Comenzar recorrido
                    </ButtonGeneric>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
