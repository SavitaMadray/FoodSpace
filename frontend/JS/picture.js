document.addEventListener('DOMContentLoaded', () => {
    console.log('dom loaded');
    loadpicture()
})


const loadpicture = async() => {
    const container = document.querySelector('#container');
    container.innerHTML = "";
    let albumId = localStorage.getItem('album_id');
    console.log(albumId);
    const response = await axios.get(`http://localhost:3000/pictures/${albumId}`);
    console.log(response);
    for(let i = 0; i < response.data.payload.length; i++){
            let images = response.data.payload[i].picture_url
            let img = document.createElement("img");
            img.src = images;
            container.appendChild(img);
    }

       
        
   
}