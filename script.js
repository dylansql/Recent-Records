// =============================================================
// clickable code
// create drop down menu based on parameters of api
// generate results randomAlbum
// append on page
// =============================================================
// https://www.theaudiodb.com/523532/discography.php?s=


// Step 1:Api 
const DOMAIN = "https://www.theaudiodb.com/"
const APIkey = "523532"
const BASE_URL =`${DOMAIN}api/v1/json/${APIkey}/discography.php?s=`
const ALBUMPIC = `${DOMAIN}api/v1/json/${APIkey}/searchalbum.php?s=`


// when user enters a name input generate genAlbum will paste result in mainbox
// description should populate underneath
// get data and append info to main box and corresponding sections
const searchB = document.querySelector("#search");

let mainDescdiv = document.querySelector('.rec-descr');



function getDesc(albums) {
    let mainDescdiv = document.createElement('div');
    let titleTag = document.createElement('h3'); 
    titleTag.innerText = albums[0].strAlbum
    mainDescdiv.appendChild(titleTag)
    mainDescdiv.appendChild(mainDescdiv)
    // seperation
    for(let i = 1; i < 4; i++) {
        let albumDiv = document.createElement('div');
        let titleTag = document.createElement('p'); 
        titleTag.innerText = albums[i].strAlbum
        albumDiv.appendChild(titleTag)
        mainDescdiv.appendChild(albumDiv)
    }

}



// create 4 elements
// set 4 innerTexts
// append each to respective div 
// after function put inside async use argument as albums.strAlbum[i]


async function getAlbum(artist_name) {
    // console.log(artist_name == "drake");
    try {
        let res = await axios.get(`${BASE_URL}${artist_name}`);
        console.log(res)
        let albums = res.data.album;
        // return albums
        getDesc(albums)
    } catch (error) {
        console.log(error);
    }
 
}

const input = document.querySelector("input");

searchB.addEventListener('click', () => {
    let artist_name = input.value; 
    getAlbum(artist_name);
})

// replacing the mainbox description
// document.getElementById("main-descr").innerHTML = `${res.data.album.strAlbum}`;

// replacing the 3 albums underneath main 
// document.getElementById("desc-1").innerHTML = `${res.data.album.strAlbum}`;
// document.getElementById("desc-2").innerHTML = `${res.data.album.strAlbum}`;
// document.getElementById("desc-3").innerHTML = `${res.data.album.strAlbum}`;

// ${artist_name}&a=${strAlbum}

async function getPICs(artist_name) {
    console.log(artist_name == "drake");
    try {
        let res = await axios.get(`${ALBUMPIC}${artist_name}&a=${strAlbum}`);
        console.log(res)
        let albumName = res.data.album.strAlbum;
        return albumName
    } catch (error) {
        console.log(error);
    }
}
