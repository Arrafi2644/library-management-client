import { Link, NavLink } from 'react-router'; // ✅ Use 'react-router-dom' instead of 'react-router'
import { Menu } from 'lucide-react';
import "./navbar.css"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'; // ✅ Update based on your actual path
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Books', path: '/books' },
        { name: 'Add Book', path: '/add-book' },
        { name: 'Borrow Summary', path: '/borrow-summary' },
    ];

    return (
        <nav className="bg-green-600 text-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    LibraryMate
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <NavLink to={link.path} className="hover:underline">
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Dropdown Menu */}
                <div className="md:hidden">
                    <DropdownMenu open={open} onOpenChange={setOpen}>
                        <DropdownMenuTrigger asChild>
                            <button>
                                <Menu size={24} />
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white text-black">
                            {navLinks.map((link) => (
                                <DropdownMenuItem onSelect={()=> setOpen(false)} key={link.name}>
                                    <NavLink to={link.path} className="w-full">
                                        {link.name}
                                    </NavLink>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
