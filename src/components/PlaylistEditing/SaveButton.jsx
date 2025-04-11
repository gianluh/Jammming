
export default function SaveButton({title, handleClick}) {

    return <>{!title ? null : <button onClick={handleClick} className="text-2xl bg-purple-500 p-3 rounded-full m-auto mb-5 shadow-2xl hover:cursor-pointer">Save To Spotify</button>}</>
}