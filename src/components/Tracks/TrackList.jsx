import Track from "./Track"
import { useState } from "react"

export default function TrackList({setAddedTracks}) {
    
    const [tracks, setTracks] = useState([
        {
            name: '5olo',
            artist: 'thasup',
            album: '236451',
            id: 1
        },
        {
            name: 'fuck 3x',
            artist: 'thasup',
            album: '236451',
            id: 2
        },
        {
            name: 'bLa bLa bLa',
            artist: 'yungestmoonstar',
            album: 'sFaCiOlAtE mIxTaPe',
            id: 3
        },
        {
            name: 'LeanTro',
            artist: 'yungestmoonstar',
            album: 'sFaCiOlAtE mIxTaPe',
            id: 4
        },{
            name: 'iN uNa buBble',
            artist: 'yungestmoonstar',
            album: 'sFaCiOlAtE mIxTaPe',
            id: 5
        },{
            name: 'netflixXx',
            artist: 'yungestmoonstar',
            album: 'sFaCiOlAtE mIxTaPe',
            id: 6
        },
    ])

    return (
        <div className="results overflow-y-auto overflow-x-hidden max-h-[456px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
            {tracks.map(track => (
                <Track
                    key={track.id}
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                    id={track.id}
                    setAddedTracks={setAddedTracks}
                />
            ))}
        </div>
    )
}