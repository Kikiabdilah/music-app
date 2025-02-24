import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import albums from "../data/Albums";

const AlbumList = ({ title }) => {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <a href="#" className="text-gray-400 hover:text-white">Show All</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {albums.map((album) => (
                    <Link to={`/album/${album.id}`} key={album.id} className="block">
                        <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                            <img src={album.cover} alt={album.title} className="w-full h-40 object-cover rounded-md" />
                            <p className="mt-2 text-center">{album.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

AlbumList.propTypes = {
    title: PropTypes.string.isRequired,
};

export default AlbumList;
