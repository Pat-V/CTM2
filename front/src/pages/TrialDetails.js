export default function TrialDetails(Trial) {

  const HandleSubmit = async (e) => {
    e.preventDefault()
  };

  return (
    <section className='section'>
      <form className='form'>
        <h5>Trial details</h5>
        <div className='form-row'>
          <label htmlFor='label' className='form-label'>
            label
          </label>
          <input
            type='text'
            className='form-input'
            id='input'
            value={input}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button onClick={HandleSubmit} className='btn btn-block'>
          submit
        </button>
      </form>
    </section>
  );
};

