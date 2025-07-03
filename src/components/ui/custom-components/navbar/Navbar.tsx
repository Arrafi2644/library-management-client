import { Link, NavLink } from 'react-router';
import "./navbar.css"

const Navbar = () => {

    return (
        <div>
            <div className='flex items-center justify-between container mx-auto px-2 py-4 border-b-1'>
                <div>
                    <Link className='font-semibold text-green-500 text-lg' to='/'>BookHive</Link>
                </div>
                <div>
                    <ul className='flex items-center gap-9 font-medium'>
                        <li className='hover:underline'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className='hover:underline'>
                            <NavLink to='/books'> Books</NavLink>
                        </li>
                        <li className='hover:underline'>
                            <NavLink to='/borrow-summary'> Borrow Summary</NavLink>
                        </li>
                        <li className='hover:underline transition-all delay-200'>
                            <NavLink to='/add-book'> Add Book</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;