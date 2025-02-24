const Sidebar = () => {
    return (
        <div className="bg-gray-800 w-full md:w-64 p-4 flex flex-col">
            <div className="flex items-center mb-6">
                <img
                    src="https://storage.googleapis.com/a1aa/image/3g83BQwAxjbH9Ed0a5U0t48SgTWUM2-SmmH6B6GPyI4.jpg"
                    alt="App logo"
                    className="h-10 w-10 mr-2"
                />
                <span className="text-2xl font-bold">MusicApp</span>
            </div>
            <nav className="flex-1">
                <ul>
                    <li className="mb-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Home
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Search
                        </a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            Your Playlist
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
