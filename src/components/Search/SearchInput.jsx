export default function SearchBar({input, setInput}) {

    const handleChange = e => setInput(e.target.value)

    return (
        <input
            className="bg-[#300945] w-2/3 h-14 rounded-3xl text-2xl pl-4 text-white placeholder-white/60 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 shadow-inner"
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={input}
        />
    )
}