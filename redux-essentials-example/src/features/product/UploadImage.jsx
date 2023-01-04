/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";

import { auth, db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const UploadImage = () => {
  const [productImage, setProductImage] = useState({
    image: "",
  });

  const hadnleImage = (event) => {
    let file = event.target.files[0];

    setProductImage({ ...setProductImage, image: file });
  };

  const [err, setErr] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log(e.target[0]);
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].files[0].name;
    const file = e.target[0].files[0];
    try {
      //Create user
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //   //Update profile
            //   await updateProfile(res.user, {
            //     displayName,
            //     photoURL: downloadURL,
            //   });
            console.log(downloadURL);
            //create user on firestore
            await setDoc(doc(db, "users", displayName), {
              photoURL: downloadURL,
            });
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="imageFile"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Choose New input
          </label>

          <input
            name="imageFile"
            accept="image/png, image/jpeg"
            className="form-control block w-full mpx-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="file"
            id="imageFile"
            onChange={hadnleImage}
          />

          <img
            className=" w-full h-96 md:m-2 md:items-center md:h-auto md:w-auto  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={setProductImage.image}
            alt="Product Look"
          />

          <button
            className="bg-red-500 border-2 border-sky-400"
            disabled={loading}
          >
            Sign up
          </button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </>
  );
};

export default UploadImage;
