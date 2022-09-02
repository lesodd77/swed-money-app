//import {message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEditTransaction from "../components/AddEditTransaction";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import "../resources/transactions.css";

function Wallet() {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const [setTransactionsData] = useState([]);
  const [frequency] = useState("7");
  const [type] = useState("all");
  const [selectedRange] = useState([]);

  const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("swed-money"));

      setLoading(true);
      const response = await axios.post(
        "/api/transactions/get-all-transactions",
        {
          userid: user._id,
          frequency,
          ...(frequency === "custom" && { selectedRange }),
          type,
        }
      );
      setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frequency, selectedRange, type]);

  return (
    <DefaultLayout>
      {loading && <Spinner />}

      <div className="flex justify-center items-center">
        <button>
          <a
            href="/analyse"
            className="mt-40 inline-flex items-center px-3 py-2 border border-transparent text-md font-medium rounded-l-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700"
          >
            Analyse
          </a>
        </button>
        <button
          className="mt-40 ml-5 inline-flex items-center px-3 py-2 border border-transparent text-md font-medium rounded-r-full shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700"
          onClick={() => setShowAddEditTransactionModal(true)}
        >
          AddMoney
        </button>
      </div>
          <div className="lottie">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_lljs8qwh.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
        </div>
        
      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          getTransactions={getTransactions}
        />
      )}
    </DefaultLayout>
  );
}

export default Wallet;
