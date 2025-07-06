import Footer from '@/components/ui/custom-components/footer/Footer';
import Navbar from '@/components/ui/custom-components/navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            
            <div className='container mx-auto px-4 min-h-screen'>
                <Outlet/>
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;