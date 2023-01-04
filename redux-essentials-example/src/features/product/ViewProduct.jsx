import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useGetProductByIDQuery, useDeleteProducMutation } from "./ProductAPI";
import { updateProductInof, setCartProductNumber } from "./ProductSlicer";
import { addProduct, selectAllProducts, updateProduct } from "./CartSlicer";

import { useState } from "react";

import { imageURL } from "../pages/Utils";

const ViewProduct = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectAllProducts);
  const [incrementAmount, setIncrementAmount] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  //const [viewImage, setviewImage] = useState({ imageSrc: "" });

  const url = new URL(window.location);
  url.searchParams.set("editinfo", "viewproduct");
  // const f = url.pathname;
  // const h = url.origin;

  // const stateObj = { h, f };

  // console.log(stateObj);
  // history.pushState(stateObj, "", h);

  window.history.pushState({}, "", url.origin);
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductByIDQuery(id);

  const [deleteProduct] = useDeleteProducMutation();

  let productInfo;
  if (isLoading) {
    productInfo = <p>Loading...</p>;
  } else if (isSuccess) {
    productInfo = product;

    // if (productInfo.image !== 0) {
    //   const reader = new FileReader();

    //   reader.onload = (e) => {
    //     setviewImage({ ...viewImage, imageSrc: e.target.result });
    //   };

    //   reader.readAsDataURL(event.target.files[0]);
    // }
  } else if (isError) {
    productInfo = (
      <p>Error while feching data of the product by its id : {error.message}</p>
    );
  }

  const handleDeleteProduct = async () => {
    try {
      const response = await deleteProduct({ id });
      if (response.error.data === "product deleted successfully") {
        navigate("/");
      }
    } catch (error) {
      console.log("Error while Delete the Product : ", error);
    }
  };

  const handleEdit = async () => {
    dispatch(updateProductInof(productInfo));
    navigate(`/editinfo/${id}`);
  };

  const handleQChange = (e) => {
    setIncrementAmount(e.target.value);
  };

  const handleDecrement = () => {
    setIncrementAmount(incrementAmount - 1);
  };

  const handleIncrement = () => {
    setIncrementAmount(incrementAmount + 1);
  };

  const handleSelectedProduct = () => {
    if (incrementAmount > productInfo.prod_quantity) {
      alert(`Availabel Product Stock : ${productInfo.prod_quantity}`);
      setIncrementAmount(0);
    } else {
      const pp = {
        id,
        prod_name: productInfo.prod_name,
        prod_price: productInfo.prod_price,
        prod_quantity: incrementAmount,
        image: productInfo.image,
      };

      const exitsTheProductInCart = cartProducts.find(
        (product) => product.id === id
      );

      if (exitsTheProductInCart) {
        dispatch(updateProduct({ ...pp }));
      } else {
        dispatch(addProduct({ ...pp }));

        dispatch(setCartProductNumber(cartProducts.length + 1));
      }
    }
  };

  return (
    <div className="m-4 flex max-h-full max-w-full justify-center ">
      <div className="m-2 flex flex-col md:flex-col md:max-w-fit rounded-lg bg-white shadow-lg">
        <img
          className=" max-w-full h-auto object-cover  md:w-auto md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={`${imageURL}${productInfo.image}`}
          alt="Product Look"
        />
        <div className="p-6 flex flex-col justify-start md:m-5">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {productInfo.prod_name}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {productInfo.prod_description}
          </p>

          <div
            className="p-2 rounded-md
                 bg-gray-300 mt-4 flex justify-between items-center"
          >
            <div>
              <p className="mt-1 text-sm text-white-900">
                Price : ${productInfo.prod_price}
              </p>
            </div>

            <p className="p-2 text-sm font-medium text-gray-900">
              In Stock : {productInfo.prod_quantity}
            </p>
          </div>
          <div
            className="p-2 rounded-md
                 bg-gray-300 mt-4 flex justify-between items-center"
          >
            <div className=" m-2 flex justify-start content-center w-1/2 ">
              {/* //NOTE: Decrement Button */}
              <button
                disabled={incrementAmount <= 0}
                onClick={handleDecrement}
                className="disabled:opacity-80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mx-2 w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <input
                className="mx-2 border text-center w-8"
                type="text"
                value={incrementAmount}
                onChange={handleQChange}
              />

              {/* //NOTE: Increment Button */}

              <button
                disabled={incrementAmount >= productInfo.prod_quantity}
                onClick={handleIncrement}
                className="disabled:opacity-80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* //NOTE: ADD to CART */}

            <button
              type="button"
              onClick={handleSelectedProduct}
              className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add to Cart
            </button>
          </div>

          <div className="m-2 flex gap-4 justify-center origin-bottom">
            {/* //NOTE: Edit Button */}
            <button onClick={handleEdit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            </button>

            {/* //NOTE: Delete Button */}
            <button onClick={handleDeleteProduct}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
