import React from "react";

const ManageSingleProduct = ({ product, openModal }) => {
  const { name, price, category } = product;

  return (
    <tr>
      <td className="border border-slate-700">{name}</td>
      <td className="border border-slate-700">{price.toFixed(2)}</td>
      <td className="border border-slate-700">{category}</td>
      <td className="border border-slate-700">
        <button onClick={() => openModal(product)} className="btn-lg bg-blue-500 text-white font-medium px-3 py-2 rounded mr-5">
          Update
        </button>
        <button className="btn-lg bg-red-500 text-white font-medium px-3 py-2 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageSingleProduct;
