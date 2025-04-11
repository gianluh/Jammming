import Track from "./Track"

export default function TrackList({ setAddedTracks, tracks }) {
    
    console.log(tracks.map(track => track.uri))

    return (
        <div className="results overflow-y-auto overflow-x-hidden max-h-[456px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
            {tracks.map(track => (
                <Track
                    key={track.id}
                    name={track.name}
                    artist={track.artists}
                    album={track.album}
                    id={track.id}
                    setAddedTracks={setAddedTracks}
                    uri={track.uri}
                />
            ))}
        </div>
    )
}