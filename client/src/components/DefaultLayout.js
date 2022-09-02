import React from "react";
import { Menu, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import "../resources/default-layout.css";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("swed-money"));
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: (
            <a href
              onClick={() => {
                localStorage.removeItem("swed-money");
                navigate("/");
              }}
            >
              Logout
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <>
    <div className="absolute w-full text-gray-700  h-16 top-0 animated z-40 bg-slate-900 dark:bg-slate-800 shadow-2xl">
      <div className="flex justify-content-between align-items-center">
        <div className="flex justify-between h-16 py-2">
          <h1 className="ml-20 py-2 font-bold text-2xl text-gray-800">CCBS</h1>
        </div>
       
      <div>
        <Dropdown overlay={menu} placement="bottomLeft">
          <button className="flex items-center mr-7 px-3 py-2 border border-transparent text-md font-medium rounded-l-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700">{user.name}</button>
        </Dropdown>
      </div>
  
    </div>
    <div className="content">{props.children}</div>
    </div>
    </>
  );
}

export default DefaultLayout;