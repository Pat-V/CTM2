import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className='navbar'>
            <Link to='/CT'>Clinical Trials</Link>
            <Link to='/Physicians'>Physicians</Link>
            <Link to='/Patients'>Patients</Link>
            <Link to='/About'>About</Link>
            <Link to='/LogOut'>Logout</Link>
        </nav>
    )
}