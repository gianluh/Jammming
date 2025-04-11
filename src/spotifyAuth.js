import axios from 'axios'

const clientId = "f713f43fd18241209b320123555bdde1"
const clientSecret = "4ff7e1279bf84f98b3fe5d8442b75cbe"

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