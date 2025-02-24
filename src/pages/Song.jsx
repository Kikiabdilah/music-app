import { useParams, useNavigate } from "react-router-dom";
import albums from "../data/Albums";
import songs from "../data/Song";
import { FiArrowLeft, FiPlayCircle } from "react-icons/fi"; // Import ikon play

const Song = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const album = albums.find((a) => a.id === parseInt(id));
    const albumSongs = songs[id] || [];

    if (!album) return <h2 className="text-white">Album not found</h2>;

    return (
        <div className="p-6 text-white bg-gray-800">
            {/* Tombol Back */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-gray-300 cursor-pointer hover:text-white mb-4"
            >
                <FiArrowLeft className="mr-2" /> Kembali
            </button>

            {/* Header Album */}
            <div className="flex items-center space-x-4 mb-6">
                <img src={album.cover} alt={album.title} className="h-24 w-24 rounded-lg shadow-lg" />
                <div>
                    <h1 className="text-3xl font-bold">{album.title}</h1>
                    <p className="text-gray-400">Album by MusicApp</p>
                </div>
            </div>

            {/* Daftar Lagu */}
            <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-3 text-gray-400 pb-2 border-b border-gray-700 text-sm font-semibold">
                    <span>Judul Lagu</span>
                    <span>Durasi</span>
                    <span>Putar</span>
                </div>

                <ul className="mt-2 space-y-3">
                    {albumSongs.map((song, index) => (
                        <li key={index} className="grid grid-cols-3 items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition">
                            {/* Judul Lagu */}
                            <span className="flex items-center space-x-2">
                                <FiPlayCircle className="text-blue-400 text-lg" /> {/* Ikon Play */}
                                <span>{song.title}</span>
                            </span>

                            {/* Durasi */}
                            <span className="text-gray-400">{song.duration}</span>

                            {/* Pemutar Lagu dengan Styling */}
                            <audio controls className="w-40 h-10 rounded-md bg-gray-700">
                                <source src={song.file} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Song;
