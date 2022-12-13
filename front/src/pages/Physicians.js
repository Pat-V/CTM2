import React, { useState, useEffect } from "react"

export default function Physicians() {
  const [physiciansInfo, setPhysiciansInfo] = useState()
  const message = localStorage.getItem('CTM_WelcomeMessage')
  
  const ListsAllPhysicians = async () =>{
      const data = await  window.fetch('/Physicians')
      const json = await data.json()
      setPhysiciansInfo(json)
  }
  useEffect(() =>  {
    ListsAllPhysicians()
  },[])
  
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
        </table>
      </section>
  );
};
