import { useState } from "react";
import { FiHome, FiSearch, FiMusic, FiMenu, FiX } from "react-icons/fi";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`bg-gray-800 ${isOpen ? "w-64" : "w-16"} min-h-screen p-4 flex flex-col transition-all duration-300`}>
            {/* Tombol Toggle Sidebar */}
            <button
                className="text-white text-2xl mb-4 focus:outline-none self-start"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Menu Navigasi */}
            <nav className="flex-1">
                <ul>
                    <li className="mb-4">
                        <a href="/" className="flex items-center text-gray-400 hover:text-white">
                            <FiHome className="text-white text-xl" />
                            {isOpen && <span className="ml-3">Home</span>}
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center text-gray-400 hover:text-white">
                            <FiSearch className="text-white text-xl" />
                            {isOpen && <span className="ml-3">Search</span>}
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="flex items-center text-gray-400 hover:text-white">
                            <FiMusic className="text-white text-xl" />
                            {isOpen && <span className="ml-3">Your Playlist</span>}
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
