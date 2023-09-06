// Include Javascript Libraries here


// Function to fetch Spotify data
function fetchData(){
    //Make sure to replace with personal Spotify API and access token
    const apiEndpoint = "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10";
    const accessToken = "YOUR_ACCESS_TOKEN";

    //fetch the top artists data
    fetch(apiEndpoint, {
        headers:{
            "Authorization": "Bearer " + accessToken
        }
    })
    .then(response=> response.json())
    .then(data => {
        const topArtistsList = document.getElementById("topArtistsList");
        data.items.forEach(artist => {
            const listItem = document.createElement("li");
            listItem.textContent = artist.name;
            topArtistsList.appendChild(listItem);
        });
        //Process and display music taste
        const musicTasteList = document.getElementById('myChart').getContext('2d');
    })
}