import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { pawdRegExp, userNameRegExp, phoneRegExp } from "./Utils";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import FormInput from "./FormInput";

// import { userURL } from "../axios/UserAPI";
// import axios from "axios";

import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

//Schema validation
const schema = yup
  .object({
    firstName: yup
      .string()
      .required("Full Name is required")
      .matches(
        userNameRegExp,
        "Username should be 3-16 characters and shouldn't include any  space or special character!"
      ),
    lastname: yup
      .string()
      .required("Full Name is required")
      .matches(
        userNameRegExp,
        "Lastname should be 3-16 characters and shouldn't include any  space or special character!"
      ),
    mail: yup.string().required("Email is required").email(),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        pawdRegExp,
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
    mobile: yup
      .string()
      .required("Mobile Phone is required")
      .matches(phoneRegExp, "Phone number is not valid"),
  })
  .required();

const RegisterUser = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  //NOTE: Input Filds

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "firstName",
      label: "firstName",
      Lable: "First Name",
      classNameForLable:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      classNameForInput:
        "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    },
    {
      id: 2,
      type: "text",
      name: "lastname",
      label: "lastname",
      Lable: "Last Name",
      classNameForLable:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      classNameForInput:
        "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    },
    {
      id: 3,
      type: "email",
      name: "mail",
      label: "mail",
      Lable: "Gmail",
      classNameForLable:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      classNameForInput:
        "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    },
    {
      id: 4,
      type: "password",
      name: "password",
      label: "password",
      Lable: "Password",
      classNameForLable:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      classNameForInput:
        "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    },
    {
      id: 5,
      type: "text",
      name: "confirmPassword",
      label: "confirmPassword",
      Lable: "Confirm Password",
      classNameForLable:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      classNameForInput:
        "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    },
    {
      id: 6,
      type: "tel",
      name: "mobile",
      label: "mobile",
      Lable: "Mobile Number",
      classNameForLable:
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
      classNameForInput:
        "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    },
  ];

  //NOTE: Registering User

  const firebaseRegister = (data) => {
    createUserWithEmailAndPassword(auth, data.mail, data.password)
      .then(() => {
        //console.log(userCredential);
        setAuth(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  // const sendUserData = async (data) => {
  //   const source = axios.CancelToken.source();

  //   const controller = new AbortController();

  //   try {
  //     // const res =
  //     await userURL
  //       .post(
  //         "/register",
  //         {
  //           email: data.mail,
  //           firstname: data.firstName,
  //           lastname: data.lastname,
  //           phoneno: data.mobile,
  //         },
  //         {
  //           cancelToken: source.token,
  //           signal: controller.signal,
  //         }
  //       )
  //       .catch(function (thrown) {
  //         if (axios.isCancel(thrown)) {
  //           console.log("Request is  canceled and Error is : ", thrown.message);
  //         }
  //       });
  //     // const response =
  //     await userURL.get("/register").catch(function (thrown) {
  //       if (axios.isCancel(thrown)) {
  //         console.log("Request is  canceled and Error is : ", thrown.message);
  //       }
  //     });
  //   } catch (error) {
  //     // Using toJSON you get an object with more information about the HTTP error.
  //     // console.log(error.toJSON());

  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       console.log(error.response.data);
  //       //Depended on back end response
  //       //console.log(error.response.data.message);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //       // http.ClientRequest in node.js
  //       console.log(
  //         `The request was made but not received proper response and The response received is  : ${error.request}`
  //       );
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       console.log(
  //         `Something happened in setting up the request that triggered an Error as Didn't recevied any response and Error Messages is : ${error.message} `
  //       );
  //     }
  //   }

  //   const cleanUp = () => {
  //     source.cancel("Operation canceled by the user.");
  //     controller.abort();
  //   };

  //   cleanUp();
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
      firstName: "User1",
      lastname: "Test",
      mail: "abc@yopmail.com",
      password: "asdF@123",
      confirmPassword: "asdF@123",
      mobile: "1231231234",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    //sendUserData(data);
    //navigate("/");

    firebaseRegister(data);

    reset();
  };

  return (
    <React.Fragment>
      <section className="bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="m-2 overflow-hidden w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-0 p-4 "
              >
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    required
                    errors={errors}
                    register={register}
                  />
                ))}

                <button
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="mt-4 text-sm text-center font-light text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RegisterUser;
