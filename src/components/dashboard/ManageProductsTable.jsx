"use client";

import { useRef, useState, useTransition } from "react";
import Modal from "../Modal";
import ManageSingleProduct from "./ManageSingleProduct";
import { useRouter } from "next/navigation";

const ManageProductsTable = ({ products }) => {
  const modalRef = useRef(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const [updateData, setUpdateData] = useState(null);
  const [loading, setLoading] = useState(false);

  const isLoading = isPending || loading;

  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };

  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const data = { title, price, category };

    if (title && price && category) {
      try {
        const res = await fetch(
          `http://localhost:5000/products/${updateData?.id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await res.json();
        console.log(result);
        form.reset();
        closeModal();
        startTransition(() => {
          router.refresh();
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <table
        className={`border-collapse border border-slate-500 w-full text-center mt-5 ${
          isLoading ? "opacity-50" : "opacity-100"
        }`}
      >
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
            <ManageSingleProduct
              key={product.id}
              product={product}
              openModal={openModal}
            />
          ))}
        </tbody>
      </table>
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        updateData={updateData}
        handleUpdateDetails={handleUpdateDetails}
      />
    </>
  );
};

export default ManageProductsTable;
