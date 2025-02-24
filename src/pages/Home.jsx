import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import AlbumList from "../components/AlbumList";

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
            <Sidebar />
            <div className="flex-1 p-6">
                <Header />
                <AlbumList title="Recently Played" />
                <AlbumList title="Recommended for You" />
            </div>
        </div>
    );
};

export default Home;
