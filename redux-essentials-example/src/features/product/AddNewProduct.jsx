import React from "react";

import { useNavigate } from "react-router-dom";

import { useAddProductMutation } from "./ProductAPI";

import { useState } from "react";

const AddNewProduct = () => {
  const navigate = useNavigate();

  const formData = new FormData();

  const [newProduct, setNewProduct] = useState({
    prod_name: "w11",
    prod_description: "Dec 23",
    prod_price: 112,
    prod_quantity: 6,
    image: "",
    imageFile: "",
  });

  const [viewImage, setViewImage] = useState({ imageSrc: "" });

  const [addProduct] = useAddProductMutation();

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const hadnleImage = (event) => {
    setNewProduct({
      ...newProduct,
      image: event.target.files[0],
      imageFile: event.target.files[0].name,
    });

    if (event.target.files.length !== 0) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setViewImage({
          ...viewImage,
          imageSrc: e.target.result,
        });
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.append("prod_name", newProduct.prod_name);

    formData.append("prod_description", newProduct.prod_description);

    formData.append("prod_price", newProduct.prod_price);

    formData.append("prod_quantity", newProduct.prod_quantity);

    formData.append("image", newProduct.image, newProduct.imageFile);

    try {
      const response = await addProduct(formData);
      if (response.error.data === "Product added successfuly") {
        navigate("/");
      }
    } catch (error) {
      console.log("Error whiel Updating the Product : ", error);
    }
  };

  const edit = (
    <div className="m-4 flex max-h-full max-w-full justify-center ">
      <form encType="multipart/form-data" id="form" onSubmit={handleSubmit}>
        <div className="m-2 flex flex-col  md:max-w-xl rounded-lg bg-white shadow-lg">
          <div className="p-6 flex flex-col justify-start">
            <img
              className=" w-full h-96 px-3 py-1.5 md:m-2 md:items-center md:h-auto object-cover md:w-auto rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={viewImage.imageSrc}
              alt="Product Look"
            />
            <label
              htmlFor="imageFile"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Choose New input
            </label>

            <input
              name="imageFile"
              //accept="image/png, image/jpeg"
              className="form-control  w-full px-3 py-1.5 block text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              type="file"
              id="imageFile"
              required
              onChange={hadnleImage}
            />

            <label
              className="form-label inline-block mb-2 text-gray-700"
              htmlFor="prod_name"
            >
              Product name :{" "}
            </label>
            <input
              name="prod_name"
              value={newProduct.prod_name}
              className="form-control  w-full px-3 py-1.5 block text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              onChange={handleChange}
              id="prod_name"
            />

            <label
              htmlFor="prod_description"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Product Description
            </label>
            <textarea
              name="prod_description"
              value={newProduct.prod_description}
              onChange={handleChange}
              className="  form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="prod_description"
              rows="3"
              placeholder="Product Content"
            />

            <label
              htmlFor="prod_price"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Product Price
            </label>
            <input
              type="number"
              name="prod_price"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="prod_price"
              value={newProduct.prod_price}
              onChange={handleChange}
              placeholder="Price"
            />

            <label
              htmlFor="prod_quantity"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Product Quantity
            </label>
            <input
              type="number"
              name="prod_quantity"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="prod_quantity"
              value={newProduct.prod_quantity}
              onChange={handleChange}
              placeholder="Quantity"
            />
          </div>
          <div className="m-2 flex gap-4 justify-center origin-bottom">
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  return <>{edit}</>;
};

export default AddNewProduct;
