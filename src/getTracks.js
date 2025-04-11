import axios from "axios"
import { getSpotifyToken } from "./spotifyAuth"

export const searchTracks = async query => {
    const token = await getSpotifyToken()

    if (!token) {
        console.error("Failed to get token")
        return []
    }

    try {
        const response = await axios.get('https://api.spotify.com/v1/search', {
            params: {
                q: query,
                type: "track",
                limit: 10
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data.tracks.items
    } catch (e) {
        console.error("Error fetching tracks", e)
        return []
    } 
}