import { useEffect } from "react"

export default function ShowTracks({ name, id, setAddedTracks }) {
    
    const handleClick = () => {
        setAddedTracks(prev => prev.filter(item => item.id !== id))
    }
    
    return (
        <div
            className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-4xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg max-w-full max-h-[70px] ">
            <h2
                className="font-bold hover:text-yellow-400 truncate text-2xl inline-block w-11/12">
                {name}
            </h2>
            <p
                className="float-right hover:cursor-pointer select-none"
                onClick={handleClick}>
                x
            </p>
        </div>
    )
}