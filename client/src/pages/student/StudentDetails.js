/* eslint-disable no-undef */

import React, {useEffect, useState} from 'react';

import axios from 'axios';

 function StudentDetails () {
    const [student, setStudent] = useState(null)
  
     // eslint-disable-next-line react-hooks/exhaustive-deps
    const getStudent = async () => {
        try {
            const response = await axios.get('http://localhost:5000/student', {
                params: {gender: user?.gender}
            })
            setStudent(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getStudent()
 // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [student])




    return (
        <>
           
        </>
    )
}
export default  StudentDetails;