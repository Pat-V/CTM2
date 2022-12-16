import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'

const Home = () => {
    return (
        <>
            <Banner />
            <NavBar />
            <Outlet />
        </>
    );
};
export default Home;
