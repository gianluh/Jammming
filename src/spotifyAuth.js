import axios from 'axios'

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

export const getSpotifyToken = async () => {
    const authString = `${clientId}:${clientSecret}`
    const base64AuthString = btoa(authString)

    try {
        const response = await axios.post("https://accounts.spotify.com/api/token", new URLSearchParams({ grant_type: "client_credentials" }),
            {
                headers: {
                    Authorization: `Basic ${base64AuthString}`,
                    "Content-Type": "application/x-www-form-urlencoded"
            }
            })
        
        return response.data.access_token
    } catch (e) {
        console.error("Error fetching token", e)
        return null
    }
}