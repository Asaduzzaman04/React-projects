
import { Outlet } from 'react-router-dom';
import Navbar from './../components/Navbar';

const Root = () => {
    return (
        <>
           <main className='bg-gray-900 text-white'>
           <Navbar/>
           <Outlet/>
           </main>
        </>
    );
};

export default Root;