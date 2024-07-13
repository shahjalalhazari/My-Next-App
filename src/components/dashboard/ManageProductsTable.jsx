"use client";

import { useRef, useState } from "react";
import Modal from "../Modal";
import ManageSingleProduct from "./ManageSingleProduct";

const ManageProductsTable = ({ products }) => {
  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  return (
    <>
      <table className="border-collapse border border-slate-500 w-full text-center mt-5">
        <thead>
          <tr>
            <th className="border border-slate-600">Title</th>
            <th className="border border-slate-600">Price</th>
            <th className="border border-slate-600">Category</th>
            <th className="border border-slate-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ManageSingleProduct key={product.id} product={product} openModal={openModal} />
          ))}
        </tbody>
      </table>
      <Modal ref={modalRef} closeModal={closeModal} updateData={updateData} />
    </>
  );
};

export default ManageProductsTable;
