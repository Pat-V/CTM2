import { useNavigate } from "react-router-dom";

  


export default function Logout() {
  const navigate = useNavigate()
  const HandleSubmit = async (e) => {
    e.preventDefault()
    
    navigate('/') 
  }


  localStorage.clear()
  return (
    <section className='section'>
      <h3>Logout</h3>
      <p>You have been loged out</p>
      <button onClick={HandleSubmit} className='btn btn-block'>
          Go to login page
        </button>
      
    </section>
  );
};
