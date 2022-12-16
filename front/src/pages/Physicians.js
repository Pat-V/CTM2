import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthorizedUser from "../components/AuthorizedUser"

export default function Physicians() {
  AuthorizedUser()
  const isConnected = localStorage.getItem('CTM_logedIn')  
  const isPeopleManager = localStorage.getItem('CTM_UserRole') === 'PeopleManager'
  const navigate = useNavigate()
  const [physiciansInfo, setPhysiciansInfo] = useState()
  const message = localStorage.getItem('CTM_WelcomeMessage')
  
  const HandleAddPhysician = async (e) => {
    e.preventDefault()
    navigate('/AddPhysician')
  }

  const ListsAllPhysicians = async () =>{
      const data = await  window.fetch('/Physicians')
      const json = await data.json()
      setPhysiciansInfo(json)
  }
  useEffect(() =>  {ListsAllPhysicians()},[isConnected])
  
  return (
      <section className='section'>
        <h3> Physicians</h3>
        <p>{message}</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
            </tr>
          </thead>
          {isPeopleManager ?
          <tbody>
            {(physiciansInfo && 
              physiciansInfo.map((physician) => (
                <tr>
                  <th scope="row">{physician.ID}</th>
                  <td>{physician.firstName}</td>
                  <td>{physician.lastName}</td>
                </tr>
              ))
            )}
          </tbody>
          :
          <></>
          }
        </table>
        {isPeopleManager ?
            <button onClick={HandleAddPhysician}>
              Add a new physician
            </button>
        :
        <></>
        }
      </section>
  );
};
