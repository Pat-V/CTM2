import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'

const Home = () => {
    let welcomeMessage = localStorage.getItem('CTM_WelcomeMessage')
    return (
        <>
            <Banner />
            <p>{welcomeMessage}</p>
            <NavBar />
            <Outlet />
        </>
    );
};
export default Home;
