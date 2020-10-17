import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/layouts";
import { isMobile } from "react-device-detect";
import {
  ButtonGeneric,
  ButtonsNavigation,
  SocialShared,
  Modal,
} from "../../components/common";

import { empresas } from "../../data/empresas";

import ImageStand from "../../assets/images/img-card-header.jpg";

const styleIfram = {
  width: 760,
  height: 415,
};

export const AmpliadoAuditorio = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal]);

  const { id } = useParams();

  const data = empresas[id];

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
            title={data.nombre}
            style={styleIfram}
            src={data.video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal>
        <div className="PageExtended">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4">
                <div className="container-tag">
                  <span className="tag">{data.categoria}</span>
                </div>

                <h2 className="title-extended">{data.nombre}</h2>

                <p className="description-extended">{data.descripcion}</p>

                <SocialShared
                  FacebookLink={data.redesSociales[0].facebook}
                  TwitterLink={data.redesSociales[1].twitter}
                  LinkedinLink={data.redesSociales[2].linkedin}
                  InstagramLink={data.redesSociales[3].instagram}
                  YoutubeLink={data.redesSociales[4].youtube}
                  WebsiteLink={data.redesSociales[5].website}
                />

                <div className="buttonWokWithUs">
                  <a
                    className="text-decoration-none"
                    target="blank"
                    href="http://www.google.com"
                  >
                    <ButtonGeneric
                      bgColor="#0096e0"
                      color="#fff"
                      bgArrow="#006a9f"
                      colorArrow="#fff"
                    >
                      Trabajá con nosotros
                    </ButtonGeneric>
                  </a>
                </div>

                <ButtonsNavigation />
              </div>
              <div className="col-md-8 col-sm-6 col-12 cont-img-stand">
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="btn"
                >
                  <img
                    className="img-fluid image-stand"
                    src={ImageStand}
                    alt="Stand Siglo 21"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};
