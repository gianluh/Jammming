import axios from 'axios';

const getSpotifyTokenFromBackend = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/spotify/token');
        const token = response.data.access_token;
        console.log('Spotify Token:', token);
    } catch (error) {
        console.error('Error fetching token:', error);
    }
};

getSpotifyTokenFromBackend()