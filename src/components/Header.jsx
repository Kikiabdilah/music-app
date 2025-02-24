import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-end items-center mb-6 relative">
            {/* <div className="flex items-center">
                <button className="text-gray-400 hover:text-white mr-4">
                    ◀️
                </button>
                <button className="text-gray-400 hover:text-white">
                    ▶️
                </button>
            </div> */}
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
