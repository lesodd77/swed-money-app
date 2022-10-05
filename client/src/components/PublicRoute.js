import axios from "axios";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../redux/alerts.js";
import { SetTeacher } from "../redux/teachers.js";
import DefaultLayout from "../DefaultLayout.js";
import { useNavigate } from "react-router-dom";

function PublicRoute(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/teacher");
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{props.children}</>;
}

export default PublicRoute;
