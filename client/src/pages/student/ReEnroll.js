import {  message,  Form,
  Select, } from "antd";
import Input from "antd/lib/input/Input";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../resources/student.css";
import axios from "axios";
import Spinner from "../../components/Spinner";

const { Option } = Select;

function ReEnroll() {

  const [form] = Form.useForm();
 
  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;
        default:
      }
    };

    const onGradeChange = (value) => {
      switch (value) {
        case 'grade':
          form.setFieldsValue({
            note: 'Hi, student!',
          });
          return;
          default:
        }
      };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(true);
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/student/reEnroll", values);
      message.success("Registration Successfull");
      setLoading(false);
    } catch (error) {
      message.error("Something went wrong");
      setLoading(false);
    }
  };
 
  const prefixSelector = (
    
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 90,
         
        }}
      >
        <Option value="229">+229</Option>
        <Option value="233">+233</Option>
      </Select>
    </Form.Item>
    
  )
  
 

  useEffect(() => {
    if (localStorage.getItem("swed-money")) {
      navigate("/reEnroll");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-slate-50 pb-20 text-gray-700 px-3 rounded-3xl shadow-lg shadow-cyan-500">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
    
        <div className="col-md-10">
        <h1  className="py-8 text-2xl font-semibold text-gray-800">Student Form</h1>
        <Form layout="vertical" onFinish={onFinish}>
          
            <Form.Item 
            name="name"
            label="Name"
            tooltip={{
              title: 'Your full name',
              
             }}
            rules={[
              {
                required: true,
                message: 'Please input your Full Name!',
              },
            ]}
            >
              <Input 
               placeholder="Full Name"
              />
            </Form.Item>
            <Select
          placeholder="Select your Gender"
          onChange={onGradeChange}
          allowClear
        >
         
                      <Option value="kg-1">Nursery 1</Option>
                      <Option value="kg-2">Nursery 2</Option>
                      <Option value="kg-3">Nursery 3</Option>
                      <Option value="grade-1">Grade / Basic 1</Option>
                      <Option value="grade-2">Grade / Basic 2</Option>
                      <Option value="grade-3">Grade / Basic 3</Option>
                      <Option value="grade-4">Grade / Basic 4</Option>
                      <Option value="grade-5">Grade / Basic 5</Option>
                      <Option value="grade-6">Grade / Basic 6</Option>
                      <Option value="grade-7">JSS 1</Option>
                      <Option value="grade-8">JSS 2</Option>
                      <Option value="grade-9">JSS 3</Option>
                      <Option value="grade-10">SSS 1</Option>
                      <Option value="grade-11">SSS 2</Option>
                      <Option value="grade-12">SSS 3</Option>
        </Select>
     
            <Form.Item
             label="Gender"
        name="gender"
        tooltip={{
          title: 'Select your gender',
          
         }}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select your Gender"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
        </Select>
      </Form.Item>
       
      <Form.Item
             label="Grade"
        name="grade"
        tooltip={{
          title: 'Select student class',
          
         }}
        rules={[
          {
            required: true,
          },
        ]}
      >
      </Form.Item>
            <Form.Item 
             label="Street"
             tooltip={{
              title: 'Your street address',
              
             }}
             name="street"
             rules={[
              {
                required: true,
                message: 'Please input your Street Address!',
              },
            ]}
             >
              <Input 
                placeholder="Street Address"
              />
            </Form.Item>
        
            <Form.Item
          
        name="phone"
        label="Tel"
        tooltip={{
          title: 'Your phone number',
          
         }}
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input 
        placeholder="Phone Number"
          addonBefore={prefixSelector}
          style={{
            width: '100%',
           
          }}
        />
      </Form.Item>
     
    
            <div className="d-flex justify-content-between align-items-center">
             
              <button className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center block w-full cursor-pointer" type="submit">
                Save Infomation
              </button>
            </div>
           
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ReEnroll;