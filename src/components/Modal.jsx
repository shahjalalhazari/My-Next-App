import { forwardRef, useRef } from "react";

const Modal = ({ closeModal, updateData }, ref) => {
  const formRef = useRef(null);

  return (
    <dialog
      ref={ref}
      className="modal modal-bottom sm:modal-middle w-[98%] max-w-[500px] rounded-md px-5 py-4 shadow-lg"
    >
      <div className="text-right mb-4">
        <button
          onClick={() => {
            closeModal();
            formRef.current.reset();
          }}
          className="btn text-red-500 border border-red-500 rounded-md px-3 py-2"
        >
          Close
        </button>
      </div>
      <div className="modal-box">
        <h3 className="font-bold text-xl mb-4">Update Product Details!</h3>

        <form ref={formRef}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full mb-2 p-2 focus:outline-none border"
            defaultValue={updateData?.name}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full mb-2 p-2 focus:outline-none border"
            defaultValue={updateData?.price}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="w-full mb-2 p-2 focus:outline-none border"
            defaultValue={updateData?.category}
          />
          <button className="text-white px-2 py-1 bg-blue-500 mt-4 rounded-md px-3 py-2">
            Update
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default forwardRef(Modal);
