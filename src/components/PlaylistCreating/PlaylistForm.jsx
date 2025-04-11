export default function PlaylistInput({ input, setInput, inputStatus, setInputStatus, addedTracks, setAddedTracks, setPlaylistTracks, setTitle }) {
    
    const handleChange = e => {
        setInput(e.target.value)

        setInputStatus(true)
    }

    const handleClick = e => {
        e.preventDefault()
        
        if (input === "") {
            return setInputStatus(false)
        }

        setTitle(input)
        setInput("")

        setPlaylistTracks(addedTracks)
        setAddedTracks([])
    }
     
    return (
        <div>
            <form
                className="flex justify-center items-center h-1/5 gap-4"
                onSubmit={e => e.preventDefault()}
            > 
                <input
                    className={`bg-[#300945] w-3/5 h-14 rounded-3xl mt-7 text-2xl outline-none pl-4 text-white placeholder-white/60 
                    focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 shadow-inner truncate ${inputStatus ? null : "ring-2 ring-red-600"}`}
                    type="text"
                    placeholder="Playlist Name"
                    onChange={handleChange}
                    value={input}
                />

                <button
                    type="submit"
                    className={`fa fa-check bg-[#300945] w-1/7 h-14 rounded-full mt-7 text-2xl transition-all duration-300 shadow-inner hover:bg-black hover:cursor-pointer`}
                    onClick={handleClick}>
                </button>
            </form>
        </div>
    )
 }