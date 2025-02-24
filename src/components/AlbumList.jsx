import PropTypes from "prop-types";
import albums from "../data/Albums";

const AlbumList = ({ title }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {albums.map((album) => (
                    <div key={album.id} className="bg-gray-800 p-5 rounded-lg text-center">
                        <img
                            src={album.cover}
                            alt={album.title}
                            className="w-full h-[150px] object-cover rounded-lg mb-2"
                        />
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
