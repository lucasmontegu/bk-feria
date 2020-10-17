import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/layouts";
import { isMobile } from "react-device-detect";
import {
  ButtonsNavigation,
  SocialShared,
  Modal,
} from "../../components/common";

import PlayButton from "../../assets/icons/play-circle-regular.svg";

const styleIfram = {
  width: 760,
  height: 415,
};

export const AmpliadoEmprendimientos = () => {
  const url = "http://206.189.178.175";
  const { id } = useParams();
  // const location = useLocation();

  // console.log(routePage);

  const [showModal, setShowModal] = useState(false);
  const [emprendimiento, setEmprendimiento] = useState([]);
  const [imagen, setImagen] = useState({});

  useEffect(() => {
    const fetchData = () => {
      fetch(`${url}/emprendimientos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          return [
            setImagen(data.Imagen_proyecto.formats.medium.url),
            setEmprendimiento(data),
          ];
        });
    };

    return fetchData();
  }, [url, id]);

  console.log(emprendimiento);

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal]);

  if (isMobile) {
    return (
      <Layout>
        <h1>Is mobile</h1>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <iframe
            title={emprendimiento.Nombre}
            style={styleIfram}
            src={emprendimiento.Video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal>
        <div className="PageExtended">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-sm-6 col-md-5"
                style={{ position: "relative" }}
              >
                <div className="container-tag">
                  <span className="tag animate__animated animate__zoomIn">
                    {emprendimiento.Estado}
                  </span>
                </div>

                <h2 className="title-extended">{emprendimiento.Nombre}</h2>

                <p className="description-extended">
                  {emprendimiento.Descripcion_corta}
                </p>

                <SocialShared
                  FacebookLink={emprendimiento.Facebook}
                  TwitterLink={emprendimiento.Twitter}
                  LinkedinLink={emprendimiento.Linkedin}
                  InstagramLink={emprendimiento.Instagram}
                  YoutubeLink={emprendimiento.Youtube}
                  WebsiteLink={emprendimiento.Sitio_web}
                />

                <ButtonsNavigation />
              </div>
              <div className="col-md-7 col-sm-6 col-12 cont-img-stand">
                {emprendimiento.Video ? (
                  <div
                    className="container-player"
                    style={{ position: "relative" }}
                  >
                    <button
                      onClick={() => {
                        setShowModal(true);
                      }}
                      className="btn"
                      style={{
                        position: "absolute",
                        zIndex: 1,
                        top: "45%",
                        left: "37%",
                      }}
                    >
                      <img src={PlayButton} alt="Play" />
                    </button>
                    <img
                      className="img-fluid animate__animated animate__fadeIn"
                      src={`${url}${imagen}`}
                      alt={emprendimiento.Nombre}
                    />
                  </div>
                ) : (
                  <img
                    className="img-fluid animate__animated animate__fadeIn"
                    src={`${url}${imagen}`}
                    alt={emprendimiento.Nombre}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};
