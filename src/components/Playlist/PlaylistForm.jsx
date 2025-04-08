export default function PlaylistInput({ input, setInput }) {
    
    const handleChange = e => setInput(e.target.value)
     
    return (
        <div>
            <form
                action="POST"
                className="flex justify-center items-center h-1/5"
            > 
                <input
                    className="bg-[#300945] w-3/4 h-14 rounded-3xl mt-7 text-2xl outline-none pl-4 text-white placeholder-white/60 
                    focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 shadow-inner"
                    type="text"
                    placeholder="Playlist Name"
                    onChange={handleChange}
                    value={input}
                />

                <button
                    type="submit">

                </button>
            </form>
        </div>
    )
 }