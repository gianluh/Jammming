import { useState, useEffect } from "react";
import { TrackList } from "./components/Tracks";
import { SearchInput } from "./components/Search";
import { SearchButton } from "./components/Search";
import { PlaylistForm } from "./components/PlaylistCreating";
import { AddedTracks } from "./components/PlaylistCreating";
import { GetPlaylist } from './components/PlaylistEditing';
import { SaveButton } from './components/PlaylistEditing';
import { searchTracks } from "./getTracks";
import { handleLogin } from "./spotifyLogin";
import { LoginBtn } from "./components/login";

export default function App() {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(false);

    // Spotify Login state
    const [accessToken, setAccessToken] = useState(null);
    const [userProfile, setUserProfile] = useState(null);  // To store user profile info

    // Search input value
    const [searchInputValue, setSearchInputValue] = useState("");
    const [searchInputStatus, setSearchInputStatus] = useState(true);

    // Playlist input value
    const [playlistInputValue, setPlaylistInputValue] = useState("");
    const [playlistInputStatus, setPlaylistInputStatus] = useState(true);

    // Tracks added to the playlist
    const [addedTracks, setAddedTracks] = useState([]);

    // Playlist created
    const [playlistTitle, setPlaylistTitle] = useState("");
    const [playlistTracks, setPlaylistTracks] = useState([]);

    // States for showing the left and right boxes with animation
    const [showCenterBox, setShowCenterBox] = useState(false);
    const [showLeftBox, setShowLeftBox] = useState(false);
    const [showRightBox, setShowRightBox] = useState(false);

    // Playlist Creating states
    const [playlistCreating, setPlaylistCreating] = useState(false)
    const [playlistCreated, setPlaylistCreated] = useState(null)

    // Trigger animation on component mount
    useEffect(() => {
        const timeoutLeft = setTimeout(() => {
            setShowLeftBox(true);
        }, 100);

        const timeoutCenter = setTimeout(() => {
            setShowCenterBox(true);
        }, 100);

        const timeoutRight = setTimeout(() => {
            setShowRightBox(true);
        }, 100);

        return () => {
            clearTimeout(timeoutCenter);
            clearTimeout(timeoutLeft);
            clearTimeout(timeoutRight);
        };
    }, []);

    const handleSearch = async () => {
        setLoading(true);
        const results = await searchTracks(searchInputValue);
        console.log(results);
        setTracks(results);
        setLoading(false);
    };

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const params = new URLSearchParams(hash.substring(1));
            const token = params.get('access_token');
            if (token) {
                setAccessToken(token);
            }
        }
    }, []);

    useEffect(() => {
        // Fetch user data once the accessToken is available
        if (accessToken) {
            fetchUserProfile();
        }
    }, [accessToken]);

    const fetchUserProfile = async () => {
        try {
            const response = await fetch("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            const data = await response.json();
            setUserProfile(data);  // Store user data
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    };

    const savePlaylist = async () => {
        try {
            // Update Loading State
            setPlaylistCreating(true)

            // Create the playlist on Spotify
            const createPlaylistResponse = await fetch(`https://api.spotify.com/v1/users/${userProfile.id}/playlists`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: playlistTitle,
                    description: "Created from Jammming",
                    public: true,
                }),
            });

            const createPlaylistData = await createPlaylistResponse.json();
            const playlistId = createPlaylistData.id;  // Get the newly created playlist ID

            // Add tracks to the playlist
            const trackUris = playlistTracks.map((track) => track.uri); // Get track URIs from added tracks

            const addTracksResponse = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    uris: trackUris,
                }),
            });

            if (!addTracksResponse.ok) {
                setPlaylistCreated(false);
            } 

            setPlaylistCreated(true);
            setPlaylistTracks([])
            setPlaylistTitle("")
            setPlaylistCreating(false)

        } catch (error) {
            console.error("Error saving playlist:", error);
        }
    };

    return (
        <>
            <nav className="w-full fixed p-4">
                <LoginBtn handleLogin={handleLogin} accessToken={accessToken} userProfile={userProfile}/>
            </nav>

            <div className="w-full h-full md:h-[100vh] flex justify-center items-center flex-col md:flex-row bg-gradient-to-br from-[#1a0033] via-[#2c005a] to-[#0f0f1c] gap-19">
                <div
                    className={`bg-[#62118c] w-1/5 rounded-2xl h-3/5 shadow-[0_0_60px_5px_purple] transform transition-all duration-700 text-white ease-in-out flex flex-col ${showLeftBox ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-15'}`}
                >   
                    {!playlistCreating ? <><GetPlaylist playlistTracks={playlistTracks} title={playlistTitle} playlistCreated={playlistCreated} />
                    <SaveButton title={playlistTitle} handleClick={savePlaylist} /></> : <><div className="justify-center text-6xl opacity-80 flex items-center h-full"><h1 className="truncate text-center">Transferring...</h1></div></>}
                </div>

                <div
                    className={`bg-[#62118c] w-2/5 rounded-2xl h-3/5 shadow-[0_0_60px_5px_purple] transform transition-all duration-700 text-white ease-in-out ${showCenterBox ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-30'}`}
                >
                    <form className="w-full h-1/5 flex items-center gap-5 justify-center">
                        <SearchInput input={searchInputValue} setInput={setSearchInputValue} inputStatus={searchInputStatus} setInputStatus={setSearchInputStatus} />
                        <SearchButton setInputStatus={setSearchInputStatus} input={searchInputValue} loading={loading} handleSearch={handleSearch} />
                    </form>
                    {loading ? (
                        <div className="opacity-60 text-6xl h-6/10 w-full flex justify-center mt-18">
                            <h1 className="loading-text">Loading...</h1>
                        </div>
                    ) : (
                        <TrackList setAddedTracks={setAddedTracks} tracks={tracks} />
                    )}
                </div>

                <div
                    className={`bg-[#62118c] w-1/5 rounded-2xl h-3/5 text-white shadow-[0_0_60px_5px_purple] transform transition-all duration-700 ease-in-out ${showRightBox ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-45'}`}
                >
                    <PlaylistForm input={playlistInputValue} setInput={setPlaylistInputValue} inputStatus={playlistInputStatus} setInputStatus={setPlaylistInputStatus} addedTracks={addedTracks} setAddedTracks={setAddedTracks} setPlaylistTracks={setPlaylistTracks} setTitle={setPlaylistTitle} />
                    <AddedTracks addedTracks={addedTracks} setAddedTracks={setAddedTracks} />
                </div>
            </div>
        </>
    );
}
