import PropTypes from "prop-types";
import albums from "../data/Albums";

const AlbumList = ({ title }) => {
    return (
        <div>
            {/* Header AlbumList dengan judul dan tombol "Show All" */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <button className="text-gray-400 cursor-pointer hover:underline hover:text-white text-sm">
                    Show All
                </button>
            </div>

            {/* Grid Album */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {albums.map((album) => (
                    <div key={album.id} className="bg-gray-800 p-5 rounded-lg">
                        <img src={album.cover} alt={album.title} className="rounded-lg mb-2 w-full h-[150px] object-cover" />
                        <h3 className="text-lg">{album.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

AlbumList.propTypes = {
    title: PropTypes.string.isRequired,
};

export default AlbumList;
