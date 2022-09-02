import { DatePicker, message, Select, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import "../resources/transactions.css";
import {
  UnorderedListOutlined,
  AreaChartOutlined,
  // EditOutlined,
  // DeleteOutlined,
} from "@ant-design/icons";
import moment from "moment";
import Analatics from "../components/Analatics";
const { RangePicker } = DatePicker;

function Analyse() {
 // const [setShowAddEditTransactionModal] =
    useState(false);
 // const [setSelectedItemForEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transactionsData, setTransactionsData] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [type, setType] = useState("all");
  const [selectedRange, setSelectedRange] = useState([]);
  const [viewType, setViewType] = useState("table");
  
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
      message.error("Something went wrong");
    }
  };

  // const deleteTransaction = async (record) => {
  //   try {
  //     setLoading(true);
  //     await axios.post("/api/transactions/delete-transaction", {
  //       transactionId: record._id,
  //     });
  //     message.success("Transaction Deleted successfully");
  //     getTransactions();
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     message.error("Something went wrong");
  //   }
  // };
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frequency, selectedRange, type]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      // title: "Actions",
      // dataIndex: "actions",
      // render: (text, record) => {
      //   // return (
      
      //   //   // <div>
      //   //   //   <EditOutlined
      //   //   //   className="edit"
      //   //   //     onClick={() => {
      //   //   //       setSelectedItemForEdit(record);
      //   //   //       setShowAddEditTransactionModal(true);
      //   //   //     } } 
      //   //   //     />
         
        
      //   //   // <DeleteOutlined
      //   //   //     className="mx-3 delete"
      //   //   //     onClick={() => deleteTransaction(record)} />
      //   //   //      </div>
            
         
      //   // );
      // },
    },
  ];

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <div className="flex justify-content-between align-items-center">
        <div className="flex">
          <div className="flex flex-column">
            <h6>Select Frequency</h6>
            <Select value={frequency} onChange={(value) => setFrequency(value)}>
              <Select.Option value="7">Last 1 Week</Select.Option>
              <Select.Option value="30">Last 1 Month</Select.Option>
              <Select.Option value="365">Last 1 Year</Select.Option>
              <Select.Option value="custom">Custom</Select.Option>
            </Select>

            {frequency === "custom" && (
              <div className="mt-2">
                <RangePicker
                  value={selectedRange}
                  onChange={(values) => setSelectedRange(values)}
                />
              </div>
            )}
          </div>
          <div className="flex flex-column mx-5">
            <h6>Select Type</h6>
            <Select value={type} onChange={(value) => setType(value)}>
              <Select.Option value="all">All</Select.Option>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </div>
        </div>
  
        <button>
          <a href="/wallet" className="flex items-center px-3 py-2 border border-transparent text-md font-medium rounded-lg shadow-lg shadow-cyan-900/50 text-white bg-cyan-600 hover:bg-cyan-700">
            AddMoney
          </a>
        </button>
        <div className="flex  justify-between">
        <div className="flex justify-between items-center">
            <div className="view-switch mx-2">
              <UnorderedListOutlined
                className={`mx-3 ${
                  viewType === "table" ? "active-icon" : "inactive-icon"
                } `}
                onClick={() => setViewType("table")}
                size={30}
              />
              Table
            </div>
            <div className="view-switch mx-2">
            <AreaChartOutlined
                className={`${
                  viewType === "analytics" ? "active-icon" : "inactive-icon"
                } `}
                onClick={() => setViewType("analytics")}
                size={30}
              />
              Analyse
            </div>
          </div>
         
        </div>
      </div>

      <div className="table-analtics">
        {viewType === "table" ? (
          <div className="table">
            <Table columns={columns} dataSource={transactionsData} />
          </div>
        ) : (
          <Analatics transactions={transactionsData} />
        )}
      </div>

      
    </DefaultLayout>
  );
}

export default Analyse;
