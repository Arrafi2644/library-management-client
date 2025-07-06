import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-green-600 text-white py-10 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* About */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">LibraryMate</h3>
                    <p className="text-sm">
                        A modern library management system to help you access and organize books with ease.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/books" className="hover:underline">Books</Link></li>
                        <li><Link to="/add-book" className="hover:underline">Add Book</Link></li>
                        <li><Link to="/borrow-summary" className="hover:underline">Borrow Summary</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                    <p className="text-sm">Email: support@librarymate.com</p>
                    <p className="text-sm">Phone: +880 1234-567890</p>
                    <p className="text-sm">Location: Dhaka, Bangladesh</p>
                </div>
            </div>

            <div className="text-center text-sm mt-8 border-t border-white pt-4">
                &copy; {new Date().getFullYear()} LibraryMate. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
