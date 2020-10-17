import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/layouts";
import { ButtonGeneric, SocialShared } from "../../components/common";

import { proyectos } from "../../data/rondas";

import Avatar from "../../assets/images/avatar-example.png";
import EmailIcon from "../../assets/icons/email-outline.svg";

export const AmpliadoPresentacionOportunidades = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal]);

  const { id } = useParams();

  const data = proyectos[id];

  return (
    <Layout>
      <div className="PageExtended top-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="content-image-proyect">
                <img className="img-fluid" src={data.imagen} alt="" />
              </div>

              <p className="proyectDescription">
                The chairman of TCL Technology Group Corp said a trader
                accidentally sold 5 million company shares using his account an
                incident that comes. The sale was made at 1:03 p.m. Tuesday by a
                trader managing chairman Li Dongsheng’s accounts who had typed
                in the wrong stock code, the Guangdong-based panel maker said in
                a filing to the Shenzhen exchange. Li bought back the shares for
                35.8 million yuan ($5.2 million) less than two hours after the
                trader sold them for 35.9 million ydseen, the firm said.
              </p>

              <ButtonGeneric
                isDownload="true"
                bgColor="#0096e0"
                color="#fff"
                bgArrow="#006a9f"
              >
                Descargar proyecto
              </ButtonGeneric>
            </div>
            <div className="col-12 col-lg-5">
              <div className="detailRonda">
                <div className="container-tag">
                  <span className="tag">{data.categoria}</span>
                </div>

                <h2 className="projectName">Project or company name here</h2>

                <div className="projectAuthor">
                  <img className="img-fluid" src={Avatar} alt="Avatar" />

                  <div className="AuthorInfo">
                    <h3 className="AuthorName">María Clara Suárez</h3>
                    <h4 className="AuthorTitle">Lic. Diseño Industrial</h4>
                    <span className="AuthorUniversity">
                      Facultad de Ciencias Químicas (UNC)
                    </span>
                  </div>
                </div>

                <ButtonGeneric
                  isCalendar="true"
                  bgColor="#0096e0"
                  color="#fff"
                  bgArrow="#006a9f"
                >
                  Agendar entrevista
                </ButtonGeneric>

                <div className="containerMail">
                  <img src={EmailIcon} alt="Email" />

                  <a className="mailContact" href="mailto:clarika@clarika.com">
                    mcsuarez@gmail.com
                  </a>
                </div>

                <SocialShared
                  FacebookLink={data.redesSociales[0].facebook}
                  TwitterLink={data.redesSociales[1].twitter}
                  LinkedinLink={data.redesSociales[2].linkedin}
                  InstagramLink={data.redesSociales[3].instagram}
                  YoutubeLink={data.redesSociales[4].youtube}
                  WebsiteLink={data.redesSociales[5].website}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
