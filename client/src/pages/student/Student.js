
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
//import "../../resources/student.css";
//import axios from "axios";

const genders = [
  { id: 'woman', title: 'Woman' },
  { id: 'man', title: 'Man' },
  { id: 'other', title: 'Other' },
]

function Student () {

  const navigate = useNavigate();
  const [data, setData] = useState({ 
  name: '',
  gender: '',
  birthdate: '',
  street: '',
  health: '',
  tel: '',
  image: '',
 
  });
  const handleChange = (name) => (e) => {
   const value = name === "image" ? e.target.files[0] : e.target.value;
   setData({ ...data, [name]: value });
   
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);
      formData.append("gender", data.gender);
      formData.append("birthdate", data.birthdate);
      formData.append("street", data.street);
      formData.append("tel", data.tel);
      formData.append("health", data.health);
     
      const res = await fetch(`http://localhost:5000/student`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ 
          name: '',
          gender: '',
          birthdate: '',
          street: '',
          health: '',
          tel: '',
          image: '',
      });
        navigate.replace("/student");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Student Form</h2>
          
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    value={data.name}
                    onChange={handleChange("name")}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Date of Birthh
                </label>
                <div className="mt-1">
                  <input
                    id="date"
                    name="birthdate"
                    type="date"
                    required
                    value={data.birthdate}
                    onChange={handleChange("birthdate")}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
      <label className="text-base font-medium text-gray-900">Gender</label>
      <fieldset className="mt-2">
        <legend className="sr-only">genderMethod method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {genders.map((gender) => (
            <div key={gender.id} className="flex items-center">
              <input
                id={gender.id}
                name="notification-method"
                type="radio"
                defaultChecked={gender.id === 'other'}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor={gender.id} className="ml-3 block text-sm font-medium text-gray-700">
                {gender.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
              <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                  Street address
                </label>
                <div className="mt-1">
                  <input
                    id="street"
                    name="street"
                    type="text"
                    autoComplete="street"
                    required
                    value={data.street}
                    onChange={handleChange("street")}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="health" className="block text-sm font-medium text-gray-700">
                  Telephone
                </label>
                <div className="mt-1">
                  <input
                    id="tel"
                    name="tel"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={data.tel}
                    onChange={handleChange("tel")}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="health" className="block text-sm font-medium text-gray-700">
                  Health Status
                </label>
                <div className="mt-1">
                  <input
                    id="health"
                    name="health"
                    type="health"
                    autoComplete="health"
                    required
                    value={data.health}
                    onChange={handleChange("health")}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Image" className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <div className="mt-1">
                <input
                 type="file"
                accept="image/*"
                   name="image"
                  
                    value={data.image}
                    onChange={handleChange("image")}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  
                </div>
              </div>
              <div>
             
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleSubmit}
                >
                  Save Info
                </button>
              </div>
            </form>
              </div>
            </div>
            </div>
          
     </>
     
  );
}

export default Student;
