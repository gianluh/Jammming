import { useEffect, useState } from "react"
import ShowPlaylist from "./ShowPlaylist"

export default function GetPlaylist({ playlistTracks, title, playlistCreated }) {

    const [text, setText] = useState(null)

    useEffect(() => {
        if (playlistCreated) {
            setText(<h1 className="truncate text-center text-6xl">Playlist <br />Created <br /> Successfully!</h1>)
        } else {
            setText(<h1 className="truncate text-center">Your <br />Playlist</h1>)
        }
    })
    
    return (
        <>  
            {!title ? null : <div className="text-center text-4xl mt-6 font-extrabold opacity-70 flex justify-center gap-3">
                <h1 contentEditable="true" onKeyDown={e => e.key === "Enter" && e.preventDefault()} className="outline-none truncate pl-6">{title}</h1>
                <i
                    className={`${!title ? null : "fa-solid fa-pen text-lg"}`}>
                </i>
            </div> }
            <div className="flex-1 overflow-y-auto results mt-2 mb-5">
            {!title ? <div className="justify-center text-8xl opacity-60 flex items-center h-full">{text}</div> : <>
            <div className="">
                <div className="flex justify-center items-center flex-col mt-2">
                    {playlistTracks.map(track => (
                    <ShowPlaylist
                        key={track.id}
                        name={track.name}
                        artist={track.artist}
                    />
                ))}
                </div>        
            </div>
            </>}
            </div>
        </>
        
    )
}