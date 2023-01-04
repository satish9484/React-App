
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

// import { userURL } from "../axios/UserAPI";

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContextProvider";

import React, { useState } from "react";

import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
 // const { setAuth } = useContext(AuthContext);

  const inputs = [
    {
      id: 1,
      type: "email",
      name: "mail",
      label: "mail",
      Lable: "Gmail",
      placeholder: "Email Address",
      classNameForLable: "justify-self-start",
      classNameForInput:
        "form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    },
    {
      id: 2,
      type: "password",
      name: "password",
      label: "password",
      Lable: "Password",
      placeholder: "Password",
      classNameForLable: "justify-self-start",
      classNameForInput:
        "form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
    },
  ];

  const firebaseLogin = (data) => {
    signInWithEmailAndPassword(auth, data.mail, data.password)
      .then(() => {
        // Signed in
        //console.log(userCredential._tokenResponse.refreshToken);
        //setAuth(true);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  //NOTE: Login user
  // const fechdata = async (data) => {
  //   try {
  //     const response = await userURL.post(`/auth`, {
  //       email: data.mail,
  //       password: data.password,
  //     });
  //     if (response.data.toString() === "User successfully login") {
  //       navigate("/");
  //       setAuth(true);
  //     }

  //   } catch (error) {
  //     alert(error.response.data.message);
  //   }
  // };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      mail: "robin123@yopmail.com",
      password: "oyj394",
    },
  });

  const handleCheckBox = () => {
    setCheck(!check);
  };

  const onSubmit = (data) => {
    // fechdata(data);
    firebaseLogin(data);
    reset();
  };

  return (
    <React.Fragment>
      <section className="h-screen overflow-y-scroll">
        <div className="container px-6 py-12 h-full ">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="PhonePhoto"
              />
            </div>
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form onSubmit={handleSubmit(onSubmit)}>
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    required
                    errors={errors}
                    register={register}
                  />
                ))}

                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      value={check}
                      onChange={handleCheckBox}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>

                  <p className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
                    <Link>Forgot password?</Link>
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <p
                  className="inline-block px-7 py-3 bg-blue-600 text-white text-center font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <Link to="/register">Sign UP</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LoginPage;
