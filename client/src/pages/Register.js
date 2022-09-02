import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
import Spinner from "../components/Spinner";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(true);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/users/register", values);
      message.success("Registration Successfull");
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
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
          <div className="lottie">
            <lottie-player
              src="https://assets1.lottiefiles.com/private_files/lf30_m6j5igxb.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div className="col-md-4">z
          <Form layout="vertical" onFinish={onFinish}>
            <h1>REGISTER</h1>
            <h2>Name</h2>
            <Form.Item 
            name="name">
              <Input />
            </Form.Item>
            <h2>Email</h2>
            <Form.Item 
             name="email">
              <Input />
            </Form.Item>
            <h2>Password</h2>
            <Form.Item 
             name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
             
              <button className="mt-3 px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center block w-full cursor-pointer" type="submit">
                REGISTER
              </button>
            </div>
            <Link to="/login" className=" mt-5 text-slate-600 hover:border-rose-600">Click Here To Login</Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;