import React from "react";

const ItemList = () => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Categoria</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td class="tg-6hdc">
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td class="tg-6hdc">
            <button>Edit</button>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ItemList;
