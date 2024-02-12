// Include Javascript Libraries here


// Function to fetch Spotify data
function fetchData(){
    //Make sure to replace with personal Spotify API and access token
    const apiEndpoint = "https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=10";
    const accessToken = "ACCESS_TOKEN";

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
        const musicTasteList = document.getElementById("myChart").getContext("2d");
        //Replace with logic to fetch display music taste based on listening history and library

        //Create a chart
        const = ctx document.getElementById("myChart").getContext("2d");
        const chart = new Chart(ctx,{
            type: "pie",
            data: {
                labels: data.items.map(artist => artist.name),
                datasets: [{
                    data: data.items.map(artist => popularity),
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.7)",
                        "rgba(54, 162, 235, 0.7)",
                        "rgba(255,206,86,0.7)",
                        "rgba(75,192,192,0.7)",
                        "rbga(153,102,255,0.7)"
                        // More colors will be added as needed
                    ]
                }]
            },
            options:{
                //Chart options and configurations below
            }
        });
    })
    .catch(error => console.error("Error fetching Spotify data: ",error));
}
// Call the fetchData function when the page loads
window.onload = fetchData;