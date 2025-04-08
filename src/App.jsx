import { useState } from "react";
import { TrackList } from "./components/Tracks"
import { SearchInput } from "./components/Search"
import { SearchButton } from "./components/Search" 
import { PlaylistForm } from "./components/Playlist"
import { AddedTracks } from "./components/Playlist"

export default function App() {

    // Keep track of the Search input value
    const [searchInputValue, setSearchInputValue] = useState("")

    // Keep track of spotify playlist input value
    const [playlistInputValue, setPlaylistInputValue] = useState("")

    // Keep track of Tracks added to the playlist
    const [addedTracks, setAddedTracks] = useState([])

    return (
        <>
            <div className="bg-[#62118c] w-2/4 rounded-2xl text-white h-3/5 shadow-[0_0_60px_5px_purple] ">
                <form
                    action="GET"
                    className="w-full h-1/5 flex items-center gap-5 justify-center"
                >
                    <SearchInput input={searchInputValue} setInput={setSearchInputValue}/>
                    <SearchButton />
                </form>
                <TrackList setAddedTracks={setAddedTracks}/>
            </div>
            <div className="bg-[#62118c] w-1/4 rounded-2xl text-white h-3/5 shadow-[0_0_60px_5px_purple] ">
                <PlaylistForm input={playlistInputValue} setInput={setPlaylistInputValue}/>
                <AddedTracks addedTracks={addedTracks} setAddedTracks={setAddedTracks}/>
            </div>
        </>
    )
}