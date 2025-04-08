export default function SearchButton() {
    

    return (
        <button
            type="submit"
            className="items-center justify-center bg-[#300945] text-white h-14 w-14 rounded-full shadow-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
            onClick={e => e.preventDefault()}
        >
            <i className="fas fa-search text-2xl"></i>
        </button>
    )
}