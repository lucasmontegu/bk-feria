import React, { useState, useEffect} from "react";
import { firebase } from "../../firebase";

export const DashboardEmprendimientos = () => {
  const initialForm = {
    name: "",
    shortDescription: "",
    description: "",
    status: "",
    entrepreneur: "",
    career: "",
    city: "",
    province: "",
    website: "",
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    whatsapp: "",
    videoLink: "",
    workWithUs: "",
  };

  const [fileUrl, setFileUrl] = React.useState(null);
  const [values, setValues] = useState(initialForm);
  const [proyects, setProyects] = useState([]);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const handleChange = (e) => {
    e.persist();
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await firebase
      .firestore()
      .collection("emprendimientos")
      .add({
        id: values.name.split(" ").join("-").toLocaleLowerCase(),
        image: fileUrl,
        ...values,
      })
      .then(() => {
        setValues(initialForm);
        setFileUrl(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {

    const fetchData = async () => {
      const db = firebase.firestore();
      const proyectsCollection = await db.collection('emprendimientos').get()

      setProyects(proyectsCollection.docs.map(doc => {
        return doc.data()
      }))
    }

    fetchData()
  }, [])

  return (
    <div className="container my-5">
      <h1>Emprendimientos</h1>
      <hr />

      <div className="row">
        <div className="col-md-6 col-12">
          <ul className="list-group list-group-flush">
            {proyects.map((proyect) => {
              return (
                <li className="list-group-item" key={proyect.id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0">{proyect.name}</h5>
                    <span>{proyect.entrepreneur}</span>
                    <div className="actions">
                      <button className="btn btn-info btn-sm mr-1">
                        Editar
                      </button>
                      <button className="btn btn-danger btn-sm">Borrar</button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-6 col-12">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Emprendimiento</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Nombre Emprendimiento"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descripcion</label>
              <textarea
                type="text"
                name="description"
                className="form-control"
                placeholder="Descripcion"
                value={values.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="shortDescription">Descripcion corta</label>
              <textarea
                type="text"
                name="shortDescription"
                className="form-control"
                placeholder="Descripcion corta"
                value={values.shortDescription}
                onChange={handleChange}
              />
            </div>

            <div className="form-row mt-3">
              <div className="col">
                <label htmlFor="status">Estado del proyecto</label>
                <input
                  name="status"
                  type="text"
                  className="form-control"
                  placeholder="Estado del proyecto"
                  value={values.status}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="entrepreneur">Nombre Emprendedor</label>
                <input
                  name="entrepreneur"
                  type="text"
                  className="form-control"
                  placeholder="Nombre Emprendedor"
                  value={values.entrepreneur}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row mt-2">
              <div className="col">
                <label htmlFor="career">Carrera</label>
                <input
                  name="career"
                  type="text"
                  className="form-control"
                  placeholder="Carrera"
                  value={values.career}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row mt-3">
              <div className="col">
                <label htmlFor="city">Ciudad</label>
                <input
                  name="city"
                  type="text"
                  className="form-control"
                  placeholder="Ciudad"
                  value={values.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="province">Provincia</label>
                <input
                  name="province"
                  type="text"
                  className="form-control"
                  placeholder="Provincia"
                  value={values.province}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h5 className="mt-5 mb-3">Redes</h5>

            <div className="form-row">
              <div className="col">
                <label htmlFor="facebook">Facebook</label>
                <input
                  name="facebook"
                  type="text"
                  className="form-control"
                  placeholder="Facebook"
                  value={values.facebook}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="twitter">Twitter</label>
                <input
                  name="twitter"
                  type="text"
                  className="form-control"
                  placeholder="Twitter"
                  value={values.twitter}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row mt-3">
              <div className="col">
                <label htmlFor="instagram">Instagram</label>
                <input
                  name="instagram"
                  type="text"
                  className="form-control"
                  placeholder="Instagram"
                  value={values.instagram}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="linkedin">Linkedin</label>
                <input
                  name="linkedin"
                  type="text"
                  className="form-control"
                  placeholder="Linkedin"
                  value={values.linkedin}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row mt-3">
              <div className="col">
                <label htmlFor="youtube">Youtube</label>
                <input
                  name="youtube"
                  type="text"
                  className="form-control"
                  placeholder="Youtube"
                  value={values.youtube}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="whatsapp">Whastapp</label>
                <input
                  name="whatsapp"
                  type="text"
                  className="form-control"
                  placeholder="Whatsapp"
                  value={values.whatsapp}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row mt-3">
              <div className="col">
                <label htmlFor="website">Sitio Web</label>
                <input
                  name="website"
                  type="text"
                  className="form-control"
                  placeholder="Sitio web"
                  value={values.website}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label htmlFor="workWithUs">Trabaja con nosotros</label>
                <input
                  name="workWithUs"
                  type="text"
                  className="form-control"
                  placeholder="Url de puestos laborales"
                  value={values.workWithUs}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col">
                <label htmlFor="videoLink">Link Video</label>
                <input
                  name="videoLink"
                  type="text"
                  className="form-control"
                  placeholder="Link video"
                  value={values.videoLink}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row mt-3">
              <div className="col">
                <input type="file" name="image" onChange={onFileChange} />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-3">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
