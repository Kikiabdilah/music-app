import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <header className="flex justify-between items-center mb-6 relative px-4">
            {/* Logo */}
            <div className="flex items-center">
                <img
                    src="https://storage.googleapis.com/a1aa/image/3g83BQwAxjbH9Ed0a5U0t48SgTWUM2-SmmH6B6GPyI4.jpg"
                    alt="App logo"
                    className="h-10 w-10 mr-2"
                />
                <span className="text-2xl font-bold">MusicApp</span>
            </div>

            {/* Search Bar */}
            <div className="flex items-center flex-1 max-w-md">
                <input
                    type="text"
                    placeholder="Search music..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>

            {/* Profile & Dropdown */}
            <div className="flex items-center relative">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-full mr-4">
                    Upgrade
                </button>
                <div className="relative">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/1qgMPVLg2O64YdSWMEOuA240P0celzurIrYiiHe9HEk.jpg"
                        alt="Profile"
                        className="h-10 w-10 rounded-full cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-lg p-2 z-50">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Settings</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
