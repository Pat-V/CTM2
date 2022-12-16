import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthorizedUser from "../components/AuthorizedUser"

export default function Patients() {
  AuthorizedUser()
  const isConnected = localStorage.getItem('CTM_logedIn')
  const isPeopleManager = localStorage.getItem('CTM_UserRole') === 'PeopleManager'
  const navigate = useNavigate()
  const [patientInfo, setPatientInfo] = useState()
  const message = localStorage.getItem('CTM_WelcomeMessage')

  const HandleAddPatient = async (e) => {
    e.preventDefault()
    navigate('/AddPatient')
  }

  const ListAllPatients = async () =>{
      const data = await  window.fetch('/Patients')
      console.log(data)
      const json = await data.json()
      setPatientInfo(json)
  }
  useEffect(() =>  {ListAllPatients()},[isConnected])
  
return (
    <>
      <section className='section'>
        <h3> Patients</h3>
        <p>{message}</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fist name</th>
              <th scope="col">Last name</th>
              <th scope="col">Age</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          {isPeopleManager ?
              <tbody>
                {(patientInfo && 
                  patientInfo.map((patient) => (
                    <tr>
                      <th scope="row">{patient.id}</th>
                      <td>{patient.firstName}</td>
                      <td>{patient.lastName}</td>
                      <td>{patient.age}</td>
                      <td>{patient.weight}</td>
                    </tr>
                  ))
                )}
              </tbody>
          :
          <></>
          }
        </table>
        {isPeopleManager ?
            <button onClick={HandleAddPatient}>
              Add a new patient
            </button>
        :
        <></>
        }
      </section>
    </>
  );
};
