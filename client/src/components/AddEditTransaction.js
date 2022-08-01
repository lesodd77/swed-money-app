import React, { useState } from "react";
import { Form, Input, message, Modal, Select } from "antd";
import Spinner from "./Spinner";
import axios from "axios";

function AddEditTransaction({
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  selectedItemForEdit,
  setSelectedItemForEdit,
  getTransactions,
}) {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("swed-money"));
      setLoading(true);
      if (selectedItemForEdit) {
        await axios.post("/api/transactions/edit-transaction", {
          payload: {
            ...values,
            userid: user._id,
          },
          transactionId: selectedItemForEdit._id,
        });
        getTransactions();
        message.success("Transaction Updated successfully");
      } else {
        await axios.post("/api/transactions/add-transaction", {
          ...values,
          userid: user._id,
        });
        getTransactions();
        message.success("Transaction added successfully");
      }
      setShowAddEditTransactionModal(false);
      setSelectedItemForEdit(null);
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };
  return (
    <Modal
      title={selectedItemForEdit ? "Edit Transaction" : "Add Transaction"}
      visible={showAddEditTransactionModal}
      onCancel={() => setShowAddEditTransactionModal(false)}
      footer={false}
    >
      {loading && <Spinner />}
      <Form
        layout="vertical"
        className="transaction-form"
        onFinish={onFinish}
        initialValues={selectedItemForEdit}
      >
        <Form.Item label="Amount" name="amount">
          <Input type="text" />
        </Form.Item>

        <Form.Item label="Type" name="type">
          <Select>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expense">Expense</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Category" name="category">
          <Select>
            {" "}
            <Select.Option value="salary">Salary</Select.Option>
            <Select.Option value="donation">Donation</Select.Option>
            <Select.Option value="canteen">Canteen</Select.Option>
            <Select.Option value="school-fees">School Fees</Select.Option>
            <Select.Option value="books">Books</Select.Option>
            <Select.Option value="investment">Investment</Select.Option>
            <Select.Option value="transportation">Transportation</Select.Option>
            <Select.Option value="scolaship">Scolaship</Select.Option>
            <Select.Option value="uniform">Uniform</Select.Option>
            <Select.Option value="medical">Medical</Select.Option>
            <Select.Option value="tax">Tax</Select.Option>
            <Select.Option value="tithe">Tithe</Select.Option>
            <Select.Option value="others">Others</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Date" name="date">
          <Input type="date" />
        </Form.Item>

        <Form.Item label="Reference" name="reference">
          <Input type="text" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input type="text" />
        </Form.Item>

        <div className="d-flex justify-content-end">
          <button className="primary" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </Modal>
  );
}

export default AddEditTransaction;
