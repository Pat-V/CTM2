import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PatientAdd() {
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')

  const HandleCancel = async (e) => {
    e.preventDefault()
    navigate('/Patients')
  };

  const HandleAdd = async (e) => {
    e.preventDefault()
    if (firstName === "" || lastName === "" || age === "" || weight === "" ) {
      setErrorMessage("One or more fields are blank. Please verify and try again")
    } else {
      const dataToSend = {
        "id": -1,
        "firstName": firstName,
        "lastName": lastName,
        "age": age,
        "weight": weight
      }

      fetch('/AddPatient', {
        method:  'POST',
        headers: {'Content-Type': 'application/json'},
        body:    JSON.stringify({'data': dataToSend})
      })

      .then(response => response.json())
      .then(data => {
        console.log("La réponse : ", data)
        navigate('/Patients')
      
      })
      .catch(error => {
        console.log("err:", error)
      });
    

  }
  };




  return (
    <section className='section'>
      <form className='form'>
        <h5>Add a Patient</h5>
        <div className='form-row'>

          <label className='form-label'> First name </label>
          <input
            type='text'
            className='form-input'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className='form-label'> Last name </label>
          <input
            type='text'
            className='form-input'
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className='form-label'> Age </label>
          <input
            type='number'
            className='form-input'
            id='age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label className='form-label'> Weight </label>
          <input
            type='number'
            className='form-input'
            id='weight'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <p>{errorMessage}</p>
        <button onClick={HandleCancel} className='btn btn-block'>
          Cancel
        </button>
        <button onClick={HandleAdd} className='btn btn-block'>
          Add the patient
        </button>
      </form>
    </section>
  );
};

