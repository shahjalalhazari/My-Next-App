'use client'

import { useEffect } from "react";

const ProductError = ({ error, reset }) => {
  
  useEffect(() => {
    console.error(error);
  }, [error])

  return (
    <div className="text-center">
      <h1 className="text-xl text-red-500 font-semibold">{error.message || "Something went wrong"}</h1>
      <button
        onClick={() => reset()}
      className="bg-blue-500 text-white px-5 py-3 mt-7">Reset
      </button>
    </div>
  );
};

export default ProductError;