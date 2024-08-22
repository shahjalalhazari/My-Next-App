"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ManageSingleProduct from "./ManageSingleProduct";
import Modal from "../Modal";
import useProducts from "@/hooks/swr/useProducts";

const AllProductsTable = () => {
  const { products, error, isLoading, isValidating, mutate } = useProducts();

  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);

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
        mutate();
        form.reset();
        closeModal();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Delete Product
  const handleDeleteProduct = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      console.log(result);
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading && (
        <div>
          <h1 className="text-center font-semibold text-2xl">Loading...</h1>
        </div>
      )}

      {!isLoading && (
        <table
          className={`border-collapse border border-slate-500 w-full text-center mt-5 ${
            isValidating ? "opacity-50" : "opacity-100"
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
      )}
      <Modal
        ref={modalRef}
        closeModal={closeModal}
        updateData={updateData}
        handleUpdateDetails={handleUpdateDetails}
      />
    </>
  );
};

export default AllProductsTable;
