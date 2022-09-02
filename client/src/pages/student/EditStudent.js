import  React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditStudent ({ match }) {
  console.log(match);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
  gender: '',
  birthdate: '',
  street: '',
  health: '',
  tel: '',
  photo: '',
  });
  useEffect(() => {
    fetch(`http://localhost:5000/student/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleChange = (student) => (e) => {
    const value = student === "photo" ? e.target.files[0] : e.target.value;
    setData({ ...data, [student]: value });
  };

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("photo", data.photo);
      formData.append("name", data.name);
      formData.append("gender", data.gender);
      formData.append("birthdate", data.birthdate);
      formData.append("street", data.street);
      formData.append("tel", data.tel);
      formData.append("health", data.health);
     
      const res = await fetch(`api/student/student/${match.params.id}`, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        setData({ student: "", photo: "" });
        navigate.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
    <div className="student-form">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                   
                    <div className="multiple-input-container">
                        <label htmlFor="first_fullName">Name</label>
                        <input
                             id="name"
                                      type="name"
                                
                                      placeholder="Full Name"
                                      required={true}
                                      value={data.name}
                                      onChange={handleChange}
                        />
</div>
<div className="multiple-input-container">
                        <label>Birthday</label>
                        
                        <input
                            id="date"
                            type="date"
                            name="birthdate"
                            placeholder="Birth Date"
                            required={true}
                            value={data.date}
                            onChange={handleChange}
                        />
                        </div>
                        <label>Gender</label>
                        <div className="multiple-input-container">
                       
                        <label htmlFor="man-gender">Man</label>
                            <input
                                id="man-gender"
                                type="radio"
                                name="gender"
                                value="man"
                                onChange={handleChange}
                                checked={data.gender === "man"}
                            />
                              <div className="multiple-input-container">
                              <label htmlFor="man-gender-identity">Woman</label>
                            <input
                                id="woman-gender"
                                type="radio"
                                name="gender"
                                value="woman"
                                onChange={handleChange}
                                checked={data.gender === "woman"}
                            />
                            </div>
                           
                       
                      
          <label htmlFor="telephone">Telephone</label>
                        <input
                        id="tel"
                        type="tel"
                        name="tel"
                        required={true}
                        placeholder="Telephone Number"
                        value={data.tel}
                        onChange={handleChange}
                    />
</div> 

 <div className="multiple-input-container">
          <label htmlFor="health">Health</label>
 <input 
        id="health"
         type="health"
         name="health"
         placeholder="Health"
         required={true}
         value={data.health}
         onChange={handleChange}
        
        />
</div> 

 <div className="multiple-input-container">
          <label htmlFor="street">Street</label>
        <input 
        id="street"
         type="street"
         name="street"
         placeholder="Street"
         required={true}
         value={data.street}
         onChange={handleChange}
           />

</div>      

     <div className="multiple-input-container">
         <label htmlFor="street">Photo</label>
         <input
          type="file"
          accept="photo/*"
          name="photo"
          onChange={handleChange("photo")}
        />
 </div>
 <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
                </form>
            </div>
  );
};

export default EditStudent;