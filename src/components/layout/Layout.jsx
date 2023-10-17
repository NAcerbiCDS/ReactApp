import { Navbar } from './navbar/NavBar';
import Footer from './footer/footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <div style={{ height: '10vh' }}>
                <Navbar />
            </div>
            <div style={{ minHeight: '80vh' }}>
                <Outlet />
            </div>
            <div style={{ height: '10vh' }}>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
