import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
// import { isMobile } from "react-device-detect";
import { ButtonGeneric, Modal } from "../../components/common";

export const ListadoAuditorio = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("dayOne");

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal]);

  const handleClickModal = () => {
    console.log("hizo click");
    setShowModal(true);
  };

  const handleTabActive = (e) => {
    const tab = e.target.id;

    setActiveTab(tab);
  };

  const styleIfram = {
    width: 760,
    height: 415,
  };

  return (
    <>
      <Modal setShowModal={setShowModal} showModal={showModal}>
        <iframe
          style={styleIfram}
          src="https://www.youtube.com/embed/iAKqVxuF93I"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
      <Layout>
        <div className="PageList AuditorioPage top-bg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="HeaderList">
                  <h2 className="TitleList">
                    Bienvenidos al edificio Auditorio!
                  </h2>
                  <p className="DescriptionList">
                    But preliminary findings from environmental testing at the
                    plant have debunked the theory that the route of
                    transmission was through chilled
                  </p>
                </div>
                <div className="SearchList">
                  <div className="CategoriesFilter">
                    <button
                      type="button"
                      className={
                        activeTab === "dayOne"
                          ? "btn LabelCategory active"
                          : "btn LabelCategory"
                      }
                      id="dayOne"
                      onClick={handleTabActive}
                    >
                      21 OCTUBRE
                    </button>

                    <button
                      onClick={handleTabActive}
                      id="dayTwo"
                      type="button"
                      className={
                        activeTab === "dayTwo"
                          ? "btn LabelCategory active"
                          : "btn LabelCategory"
                      }
                    >
                      22 OCTUBRE
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={
                  activeTab === "dayOne" ? "ListEvents" : "ListEvents d-none"
                }
              >
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="titleEvents">Cronograma de charlas</h3>
                      <div>
                        <table className="table ">
                          <tbody>
                            <tr disabled>
                              <td className="table-date">09:00 - 09:30</td>
                              <td className="table-event">
                                Apertura y Bienvenida a todos los asistentes de
                                la Feria Siglo 21
                              </td>
                              <td className="table-speaker">
                                <p>Lic. Juan Carlos Rabbat</p>
                                <p>Presidente - Universidad Siglo 21</p>
                              </td>
                              <td className="table-action">
                                <span className="notAvailable">
                                  No Disponible
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">09:00 - 09:30</td>
                              <td className="table-event">
                                La importancia de implementar estretagias de UX
                                en empresas
                              </td>
                              <td className="table-speaker">
                                <p>Agustina Vázquez</p>
                                <p>Product Designer - Google</p>
                              </td>
                              <td className="table-action">
                                <div className="d-flex align-items-center justify-content-around">
                                  <span className="liveNow">LIVE</span>
                                  <ButtonGeneric
                                    bgColor="#0096e0"
                                    color="#fff"
                                    colorArrow="#fff"
                                    btnWidth="38"
                                    btnHeight="38"
                                    fontSize="14"
                                    shadow={false}
                                    isPlay={true}
                                    actionClick={handleClickModal}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">09:00 - 09:30</td>
                              <td className="table-event">
                                La importancia de implementar estretagias de UX
                                en empresas
                              </td>
                              <td className="table-speaker">
                                <p>Agustina Vázquez</p>
                                <p>Product Designer - Google</p>
                              </td>
                              <td className="table-action">
                                <ButtonGeneric
                                  isCalendar={true}
                                  bgColor="#0096e0"
                                  color="#fff"
                                  bgArrow="#006a9f"
                                  btnWidth="120"
                                  btnHeight="38"
                                  fontSize="14"
                                  shadow={false}
                                >
                                  Agendar
                                </ButtonGeneric>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">09:00 - 09:30</td>
                              <td className="table-event">
                                La importancia de implementar estretagias de UX
                                en empresas
                              </td>
                              <td className="table-speaker">
                                <p>Agustina Vázquez</p>
                                <p>Product Designer - Google</p>
                              </td>
                              <td className="table-action">
                                <ButtonGeneric
                                  isCalendar={true}
                                  bgColor="#0096e0"
                                  color="#fff"
                                  bgArrow="#006a9f"
                                  btnWidth="120"
                                  btnHeight="38"
                                  fontSize="14"
                                  shadow={false}
                                >
                                  Agendar
                                </ButtonGeneric>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">11:30 - 12:30</td>
                              <td className="table-event">
                                Adopción Tecnológica y Transformación Digital
                                para empresas
                              </td>
                              <td className="table-speaker">
                                <p>Florencia Caballero</p>
                                <p>Sales Manager - Vates</p>
                              </td>
                              <td className="table-action">
                                <ButtonGeneric
                                  isCalendar={true}
                                  bgColor="#0096e0"
                                  color="#fff"
                                  bgArrow="#006a9f"
                                  btnWidth="120"
                                  btnHeight="38"
                                  fontSize="14"
                                  shadow={false}
                                >
                                  Agendar
                                </ButtonGeneric>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">15:00 - 16:00</td>
                              <td className="table-event">
                                La importancia de implementar estretagias de UX
                                en empresas
                              </td>
                              <td className="table-speaker">
                                <p>Ana Lucía Cáceresz</p>
                                <p>Talent Managment - IBM</p>
                              </td>
                              <td className="table-action">
                                <ButtonGeneric
                                  isCalendar={true}
                                  bgColor="#0096e0"
                                  color="#fff"
                                  bgArrow="#006a9f"
                                  btnWidth="120"
                                  btnHeight="38"
                                  fontSize="14"
                                  shadow={false}
                                >
                                  Agendar
                                </ButtonGeneric>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  activeTab === "dayTwo" ? "ListEvents" : "ListEvents d-none"
                }
              >
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="titleEvents">Cronograma de charlas </h3>
                      <div>
                        <table className="table ">
                          <tbody>
                            <tr disabled>
                              <td className="table-date">09:00 - 09:30</td>
                              <td className="table-event">
                                Apertura y Bienvenida a todos los asistentes de
                                la Feria Siglo 21
                              </td>
                              <td className="table-speaker">
                                <p>Lic. Juan Carlos Rabbat</p>
                                <p>Presidente - Universidad Siglo 21</p>
                              </td>
                              <td className="table-action">
                                <span className="notAvailable">
                                  No Disponible
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">09:00 - 09:30</td>
                              <td className="table-event">
                                La importancia de implementar estretagias de UX
                                en empresas
                              </td>
                              <td className="table-speaker">
                                <p>Agustina Vázquez</p>
                                <p>Product Designer - Google</p>
                              </td>
                              <td className="table-action">
                                <ButtonGeneric
                                  isCalendar={true}
                                  bgColor="#0096e0"
                                  color="#fff"
                                  bgArrow="#006a9f"
                                  btnWidth="120"
                                  btnHeight="38"
                                  fontSize="14"
                                  shadow={false}
                                >
                                  Agendar
                                </ButtonGeneric>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">09:00 - 09:30</td>
                              <td className="table-event">
                                La importancia de implementar estretagias de UX
                                en empresas
                              </td>
                              <td className="table-speaker">
                                <p>Agustina Vázquez</p>
                                <p>Product Designer - Google</p>
                              </td>
                              <td className="table-action">
                                <div className="d-flex align-items-center justify-content-around">
                                  <span className="liveNow">LIVE</span>
                                  <ButtonGeneric
                                    bgColor="#0096e0"
                                    color="#fff"
                                    colorArrow="#fff"
                                    btnWidth="38"
                                    btnHeight="38"
                                    fontSize="14"
                                    shadow={false}
                                    isPlay={true}
                                    actionClick={handleClickModal}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">09:00 - 09:30</td>
                              <td className="table-event">
                                La importancia de implementar estretagias de UX
                                en empresas
                              </td>
                              <td className="table-speaker">
                                <p>Agustina Vázquez</p>
                                <p>Product Designer - Google</p>
                              </td>
                              <td className="table-action">
                                <div className="d-flex align-items-center justify-content-around">
                                  <span className="liveNow">LIVE</span>
                                  <ButtonGeneric
                                    bgColor="#0096e0"
                                    color="#fff"
                                    colorArrow="#fff"
                                    btnWidth="38"
                                    btnHeight="38"
                                    fontSize="14"
                                    shadow={false}
                                    isPlay={true}
                                    actionClick={handleClickModal}
                                  />
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">09:00 - 09:30</td>
                              <td className="table-event">
                                La importancia de implementar estretagias de UX
                                en empresas
                              </td>
                              <td className="table-speaker">
                                <p>Agustina Vázquez</p>
                                <p>Product Designer - Google</p>
                              </td>
                              <td className="table-action">
                                <ButtonGeneric
                                  isCalendar={true}
                                  bgColor="#0096e0"
                                  color="#fff"
                                  bgArrow="#006a9f"
                                  btnWidth="120"
                                  btnHeight="38"
                                  fontSize="14"
                                  shadow={false}
                                >
                                  Agendar
                                </ButtonGeneric>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">11:30 - 12:30</td>
                              <td className="table-event">
                                Adopción Tecnológica y Transformación Digital
                                para empresas
                              </td>
                              <td className="table-speaker">
                                <p>Florencia Caballero</p>
                                <p>Sales Manager - Vates</p>
                              </td>
                              <td className="table-action">
                                <ButtonGeneric
                                  isCalendar={true}
                                  bgColor="#0096e0"
                                  color="#fff"
                                  bgArrow="#006a9f"
                                  btnWidth="120"
                                  btnHeight="38"
                                  fontSize="14"
                                  shadow={false}
                                >
                                  Agendar
                                </ButtonGeneric>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-date">15:00 - 16:00</td>
                              <td className="table-event">
                                La importancia de implementar estretagias de UX
                                en empresas
                              </td>
                              <td className="table-speaker">
                                <p>Ana Lucía Cáceresz</p>
                                <p>Talent Managment - IBM</p>
                              </td>
                              <td className="table-action">
                                <ButtonGeneric
                                  isCalendar={true}
                                  bgColor="#0096e0"
                                  color="#fff"
                                  bgArrow="#006a9f"
                                  btnWidth="120"
                                  btnHeight="38"
                                  fontSize="14"
                                  shadow={false}
                                >
                                  Agendar
                                </ButtonGeneric>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
