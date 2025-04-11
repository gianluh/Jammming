
export default function ShowPlaylist({name, artist}) {

    return (
        <div className="flex justify-center gap-1 text-lg mt-2 bg-purple-950 w-9/12 truncate h-13 items-center rounded-full pr-8 pl-8 shadow-[0_8px_20px_rgba(0,0,0,0.5),_0_0_15px_rgba(165,105,255,0.3)]">
            <h3 className="text-2xl truncate">{name} -</h3>
            <p className="truncate italic">{artist}</p>
        </div>
    )
}