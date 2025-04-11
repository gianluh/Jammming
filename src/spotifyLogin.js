export const handleLogin = () => {
    
    const clientId = "f713f43fd18241209b320123555bdde1";  
    const redirectUri = "https://gianluh.github.io/Jammming/";  
    const scope = "playlist-modify-public playlist-modify-private user-read-private user-read-email";
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

    // Redirect to Spotify login page
    window.location.href = authUrl;
};