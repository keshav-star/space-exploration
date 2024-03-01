import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/ui/Loader";
import { message } from "antd";

const Auth = () => {
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
  const { loginUser } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setisRegistered] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    if(!username || !password){
      message.error("Username or Password cannot be empty")
      return
    }
    setIsLoading(true);
    const randomString = generateRandomString();
    setTimeout(() => {
      setIsLoading(false);
      loginUser({
        code:randomString,
        name:username
      });
    }, 2000);
  };
  const handleRegister = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post("/api/register", {
    //     username: username,
    //     password: password,
    //   });
    //   message.success(response.data.message);
    //   if (response.data?.success) {
    //     setisRegistered(true);
    //     setUsername("");
    //     setPassword("");
    //   }
    // } catch (error) {
    //   console.log(error);
    //   message.error(error.response.data.message);
    //   window.location.href = "/";
    // }
  };

  return (
    <div className=" bg-[url('bg/bg3.jpg')] bg-cover text-[#58381C]">
      {isRegistered ? (
        <div className="flex items-center justify-center h-[100vh] shadow">
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-[30rem] h-[30rem] p-4 shadow-xl border-2 border-gray-300 bg-gray-200 bg-opacity-50 rounded"
          >
            <h1 className="text-2xl font-semibold text-center my-5">Login To Start Exploring</h1>
            <input
              type="text"
              className="text-2xl m-2 p-2 mt-16"
              placeholder="Enter Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="text-2xl m-2 p-2 my-8"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              className="cursor-pointer text-[#58381C] font-semibold text-center"
              onClick={() => setisRegistered(!isRegistered)}
            >
              {" "}
              Don't have account? <span className="text-[#a26835]">Register Now</span>
            </a>
          </form>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[100vh] shadow">
          <form
            onSubmit={handleRegister}
            className="flex flex-col w-[30rem] h-[30rem] p-4 shadow-xl border-2 border-gray-300 bg-gray-200 bg-opacity-50 rounded"
          >
            <h1 className="text-2xl font-semibold text-center my-5">Login To Start Exploring</h1>
            <input
              type="text"
              className="text-2xl m-2 p-2 mt-16"
              placeholder="Enter Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="text-2xl m-2 p-2 my-8"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className=" w-fit p-2 px-5 rounded-lg bg-[#58381C] hover:bg-[#d4a277] text-xl text-white  m-auto"
              type="submit"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <Loader /> Registering ...
                </div>
              ) : (
                "Login"
              )}
            </button>
            <a
              className="cursor-pointer text-[#58381C] font-semibold text-center"
              onClick={() => setisRegistered(!isRegistered)}
            >
              {" "}
              Already have account? <span className="text-[#a26835]">Click Here</span>
            </a>
          </form>
        </div>
      )}
    </div>
  );
};

export default Auth;
