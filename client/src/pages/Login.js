import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";

function Login() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", values);
      localStorage.setItem(
        "swed-money",
        JSON.stringify({ ...response.data, password: "" })
      );
      setLoading(false);
      message.success("Login successful");
      navigate("/wallet");
    } catch (error) {
      setLoading(false);
      message.error("Login failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("swed-money")) {
      navigate("/wallet");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="register">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>Login</h1>
            <h2>Email</h2>
            <Form.Item 
            name="email"
            className="text-white"
            >
              <Input />
            </Form.Item>
            <h2>Password</h2>
            <Form.Item 
            name="password"
            >
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
             
              <button className="mt-3 px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center block w-full cursor-pointer" type="submit">
                LOGIN
              </button>
            </div>
            <Link to="/register" className=" mt-5 text-slate-600 hover:border-rose-600">
                Not Registered Yet , Click Here To Register
              </Link>
          </Form>
        </div>
        <div className="col-md-4">
          <div className="lottie">
            <lottie-player
              src="https://assets8.lottiefiles.com/private_files/lf30_zh2jz2uz.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;