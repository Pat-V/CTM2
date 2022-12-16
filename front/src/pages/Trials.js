import React, { useState, useEffect } from "react"
import AuthorizedUser from "../components/AuthorizedUser"

export default function Trials() {
  AuthorizedUser()
  const isConnected = localStorage.getItem('CTM_logedIn')
  const [trialsInfo, setTrialsInfo] = useState()
  const message = localStorage.getItem('CTM_WelcomeMessage')
  
  const isTrialManager = localStorage.getItem('CTM_UserRole') === 'TrialManager'

  function handleClick(id) {
    alert(`you have been request to view details for the trial: ${id}`)
  }
  const ListAllTrials = async () =>{
      const data = await  window.fetch('/CT')
      console.log(data)
      const json = await data.json()
      setTrialsInfo(json)
  }
useEffect(() =>  {ListAllTrials()},[isConnected])
return (
    <section className='section'>
      <h3>Clinical trials</h3>
      <p>{message}</p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Start date</th>
            <th scope="col">End date</th>
            <th scope="col">Nb physicians</th>
            <th scope="col">Nb patient</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {isTrialManager ?
        <tbody>
          {(trialsInfo && 
            trialsInfo.map((trial) => (
              <tr>
                <th key={trial.id} scope="row">{trial.id}</th>
                <td>{trial.title}</td>
                <td>{trial.description}</td>
                <td>{trial.startDate}</td>
                <td>{trial.endDate}</td>
                <td>{trial.NBPhysicians}</td>
                <td>{trial.NBPatients}</td>
                <td>
                {isTrialManager ? 
                  <button onClick={() => handleClick(trial.id)} className='btn btn-hipster:hover'>
                    Edit
                  </button>
                  :
                  <></>
                }
                </td>

              </tr>
            ))
          )}
        </tbody>
        :
        <></>
        }
      </table>
    </section>
  );
 };