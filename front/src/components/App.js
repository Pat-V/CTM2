
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SharedLayout from '../pages/SharedLayout'
import Login from '../pages/login.js'
import Trials from '../pages/Trials.js'
import Physicians from '../pages/Physicians';
import Patients from '../pages/Patients';
import About from '../pages/About.js'
import LogOut from '../pages/LogOut.js';
import PageNotFound from '../pages/PageNotFound.js'
import PatientAdd from '../pages/PatientAdd';

export default function App() {
  window.onbeforeunload = () => {
    localStorage.clear()
  }
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<SharedLayout />}>
          <Route index  element={<Login />} />
          <Route path = 'CT' element={<Trials />} />
          <Route path = 'Physicians' element={<Physicians />} />
          <Route path = 'Patients' element={<Patients />} />
          <Route path = 'about' element={<About />} />
          <Route path = 'logout' element={<LogOut />} />
          <Route path = '*' element={<PageNotFound />} />
          <Route path = 'AddPatient' element={<PatientAdd />} />
        </Route>
      </Routes>
      <footer className='footer'  > © 2022/22  -  CTM  -  contact: patrice.vitte@efrei.net </footer>
    </Router>
  );
}

