"use client";

import { useRef, useState, useTransition } from "react";
import ManageSingleProduct from "./ManageSingleProduct";
import { useRouter } from "next/navigation";
import Modal from "../Modal";

const ManageProductsTable = ({ products }) => {
  const modalRef = useRef(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const [updateData, setUpdateData] = useState(null);
  const [loading, setLoading] = useState(false);

  const isLoading = isPending || loading;

  // Open Modal
  const openModal = (product) => {
    setUpdateData(product);
    modalRef.current.showModal();
  };

  // Close Modal
  const closeModal = () => {
    setUpdateData(null);
    modalRef.current.close();
  };

  // Update Product Details
  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const data = { title, price, category };

    if (title && price && category) {
      setLoading(true);

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
        setLoading(false);
        closeModal();
        startTransition(() => {
          router.refresh();
        });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  // Delete Product
  const handleDeleteProduct = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      console.log(result);
      setLoading(false);
      startTransition(() => {
        router.refresh();
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
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
              handleDeleteProduct={handleDeleteProduct}
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
