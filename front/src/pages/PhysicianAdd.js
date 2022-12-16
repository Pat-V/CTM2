import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PhysicianAdd() {
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const HandleCancel = async (e) => {
    e.preventDefault()
    navigate('/Physicians')
  };

  const HandleAdd = async (e) => {
    e.preventDefault()
    if (firstName === "" || lastName === "" ) {
      setErrorMessage("One or more fields are blank. Please verify and try again")
    } else {
      const dataToSend = {
        "firstName": firstName,
        "lastName": lastName
      }

      fetch('/AddPhysician', {
        method:  'POST',
        headers: {'Content-Type': 'application/json'},
        body:    JSON.stringify({'data': dataToSend})
      })
      navigate('/Physicians')

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
        </div>
        <p>{errorMessage}</p>
        <button onClick={HandleCancel} className='btn btn-block'>
          Cancel
        </button>
        <button onClick={HandleAdd} className='btn btn-block'>
          Add the physician
        </button>
      </form>
    </section>
  );
};

