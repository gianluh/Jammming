export default function Track({ name, artist, album, id, setAddedTracks }) {

    const handleAdd = () => {

        // Update the addedTracks state in App.jsx
        setAddedTracks(prev => [
            ...prev,
            {
                name,
                artist,
                album,
                id
            }
        ])
    }

    return (
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-4xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg max-w-full">
            <h3 className="text-4xl text-white font-extrabold mb-3 hover:text-yellow-400 truncate">{name}</h3>
            <p className="text-lg text-purple-200 mb-2 hover:text-yellow-300 truncate">{artist}</p>
            <p className="text-md text-white italic truncate">{album}</p>

            <button
                className="mt-4 px-4 py-2 bg-purple-700 text-whivte rounded-4xl hover:bg-purple-900 transition-colors text-3xl"
                onClick={handleAdd}
            >
                +
            </button>
        </div>
    )
}