import Navbar from '@/components/ui/custom-components/navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            
            <div className='container mx-auto px-2'>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;