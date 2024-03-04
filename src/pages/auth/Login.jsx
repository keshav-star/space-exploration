import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/ui/Loader";
import { message } from "antd";
import { useFormik } from "formik";
import { loginSchema, registerSchema } from "../../config/Formik/Validate";

const Login = ({ toogle }) => {
  const { loginUser } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        setIsLoading(true);
        const randomString = generateRandomString();
        setTimeout(() => {
          setIsLoading(false);
          loginUser({
            code: randomString,
            cred: values,
          });
        }, 2000);

        action.resetForm();
      },
    });

  const [isLoading, setIsLoading] = useState(false);

  function generateRandomString() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const length = 15;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }

    return result;
  }

  return (
    <div className="flex items-center justify-center h-[100vh] shadow">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[30rem] p-4 shadow-xl border-2 border-gray-300 bg-gray-200 bg-opacity-50 rounded"
      >
        <h1 className="text-2xl font-semibold text-center my-5">
          Login To Start Exploring
        </h1>

        <div className="flex-col flex my-2">
          <label htmlFor="email" className="text-xl font-semibold">
            Email
          </label>
          <input
            className="p-1 px-4 text-lg rounded my-2 py-2"
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.email && touched.email ? (
          <p className="text-red-600">*{errors.email}</p>
        ) : null}
        <div className="flex-col flex my-2">
          <label htmlFor="password" className="text-xl font-semibold">
            Password
          </label>
          <input
            className="p-1 px-4 text-lg rounded my-2 py-2"
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.password && touched.password ? (
          <p className="text-red-600">*{errors.password}</p>
        ) : null}
        {errors.confirm_password && touched.confirm_password ? (
          <p className="text-red-600">*{errors.confirm_password}</p>
        ) : null}
        <button
          className=" w-fit p-2 px-5 rounded-lg bg-[#58381C] hover:bg-[#d4a277] text-xl text-white  m-auto"
          type="submit"
        >
          {isLoading ? (
            <div className="flex items-center">
              <Loader /> Logging ...
            </div>
          ) : (
            "Login"
          )}
        </button>
        <a
          className="mt-3 cursor-pointer text-[#58381C] font-semibold text-center"
          onClick={toogle}
        >
          {" "}
          Don't have account?{" "}
          <span className="text-[#a26835]">Register Now</span>
        </a>
      </form>
    </div>
  );
};

const Register = ({ toogle }) => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        setIsLoading(true);
        const { name, email, password } = values;

        localStorage.setItem(
          "reg_users",
          JSON.stringify({ name: name, email: email, password: password })
        );
        message.success("User Registered Successfully");
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        action.resetForm();
        toogle();
      },
    });

  return (
    <div className="flex items-center justify-center h-[100vh] shadow">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[30rem] p-4 shadow-xl border-2 border-gray-300 bg-gray-200 bg-opacity-50 rounded"
      >
        <h1 className="text-2xl font-semibold text-center my-5">
          Register Here
        </h1>
        <div className="flex-col flex my-2 ">
          <label htmlFor="name" className="text-xl font-semibold">
            Name
          </label>
          <input
            className="p-1 px-4 text-lg rounded my-2 py-2"
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.name && touched.name ? (
          <p className="text-red-600">*{errors.name}</p>
        ) : null}
        <div className="flex-col flex my-2">
          <label htmlFor="email" className="text-xl font-semibold">
            Email
          </label>
          <input
            className="p-1 px-4 text-lg rounded my-2 py-2"
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.email && touched.email ? (
          <p className="text-red-600">*{errors.email}</p>
        ) : null}
        <div className="flex-col flex my-2">
          <label htmlFor="password" className="text-xl font-semibold">
            Password
          </label>
          <input
            className="p-1 px-4 text-lg rounded my-2 py-2"
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.password && touched.password ? (
          <p className="text-red-600">*{errors.password}</p>
        ) : null}
        <div className="flex-col flex my-2">
          <label htmlFor="confirm_password" className="text-xl font-semibold">
            Confirm Password
          </label>
          <input
            className="p-1 px-4 text-lg rounded my-2 py-2"
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.confirm_password && touched.confirm_password ? (
          <p className="text-red-600">*{errors.confirm_password}</p>
        ) : null}
        <button
          className=" w-fit p-2 px-5 rounded-lg bg-[#58381C] hover:bg-[#d4a277] text-xl text-white  m-auto"
          type="submit"
        >
          {isLoading ? (
            <div className="flex items-center">
              <Loader /> Registering ...
            </div>
          ) : (
            "Register"
          )}
        </button>
        <a
          className="cursor-pointer text-[#58381C] font-semibold text-center my-2"
          onClick={toogle}
        >
          {" "}
          Already have account?{" "}
          <span className="text-[#a26835]">Click Here</span>
        </a>
      </form>
    </div>
  );
};
const Auth = () => {
  const [isRegistered, setisRegistered] = useState(true);
  const handleIsReg = () => {
    setisRegistered(!isRegistered);
  };

  return (
    <div className=" bg-[url('bg/bg3.jpg')] bg-cover text-[#58381C]">
      {isRegistered ? (
        <Login toogle={handleIsReg} />
      ) : (
        <Register toogle={handleIsReg} />
      )}
    </div>
  );
};

export default Auth;
