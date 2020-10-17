import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const getAll = (routePage) => {
  return axios(`${url}/${routePage}`)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.data;
    });
};

// function getAll(routePage) {
//   return axios(`${url}/${routePage}`)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// export { getAll };
