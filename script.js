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

let mainDescdiv = document.querySelector('.descDiv');

// =============================================================================
// =========================artist name axios request===========================
async function getAlbum(artist_name) {
    // console.log(artist_name == "drake");
    try {
        let res = await axios.get(`${BASE_URL}${artist_name}`);
        // console.log(res)
        let albums = res.data.album;
        console.log(albums)
        getDesc(artist_name, albums)
        // console.log(strAlbum)
        // console.log(res.data.album[0].strAlbum)
    } catch (error) {
        console.log(error);
    }
    
}
// =============================================================================
// ============================Descriptions=====================================
let mainTrack = document.createElement('div');
let secondaryTrackDiv = document.querySelector('.descDiv')

async function getDesc(artist_name, albums) {
    let imgTagMain = document.createElement('img')
    let titleTag = document.createElement('h3'); 
    let res3 = await axios(`${ALBUMPIC}${artist_name}&a=${albums[0].strAlbum}`)
    imgTagMain.setAttribute('src', res3.data.album[0].strAlbumThumb);
    mainTrack.appendChild(imgTagMain);
    let mainTrackDiv = document.querySelector('.main-rec')
    titleTag.innerText = albums[0].strAlbum
    mainTrack.appendChild(titleTag)
    mainTrackDiv.appendChild(mainTrack);
    //==========================================================================
    // ==========================adding class lists to function=================
    // first main title and description
    mainTrack.classList.add('mainTrack');
    titleTag.classList.add('mainTrackDesc');
    // =========================================================================
    // ======for loop is creating divs and images for secondary albums==========
    for(let i = 1; i < 10; i++) {
        let res2 = await axios(`${ALBUMPIC}${artist_name}&a=${albums[i].strAlbum}`)
        console.log(res2)
        let secondaryTracks = document.createElement('div');
        let imgTag = document.createElement('img')
        let secondaryTitleTag = document.createElement('p'); 
        imgTag.setAttribute('src', res2.data.album[0].strAlbumThumb)
        secondaryTitleTag.innerText = albums[i].strAlbum
        secondaryTracks.appendChild(imgTag)
        secondaryTracks.appendChild(secondaryTitleTag)
        secondaryTrackDiv.appendChild(secondaryTracks)
        //======================================================================
        //======================adding class list for secondary=================
        secondaryTracks.classList.add('secTracks');
        secondaryTitleTag.classList.add('secTracksDesc');
    }
    
}
// ==============================================================================
// take the arguments of artist_name and str_album from previous function
// use arguments to obtain array then create function that gets img and render to page 
// =======================Search Button with Input being artist_name=============
const searchB = document.querySelector("#search");

const input = document.querySelector("input");

// let containerOne = document.querySelector('.mainTrack')

// let containerTwo = document.querySelector('.secTracks')

// const selectBox = document.querySelector("secTracks")

// selectBox.addEventListener('click', () = {
//  let savedSelection = input.value
//}
// function saveAlbumName(savedSelection) {
//  let savedSelection = 
// } 

searchB.addEventListener('click', () => {
    mainTrack.innerText = "";
    secondaryTrackDiv.innerHTML = "";
    let artist_name = input.value;
    getAlbum(artist_name)
});

// ==============================================================================
// ==============================================================================
async function getPICs(artist_name, albums) {
    // console.log(artist_name == "drake");
    
    albums.forEach(async(album) => {
        let res2 = await axios(`${ALBUMPIC}${artist_name}&a=${album.strAlbum}`)
        console.log(res2)
        
    })           
    // let mainDescdiv = document.createElement('div');
    // let titleTag = document.createElement('h3'); 
    // let descDiv = document.querySelector('.descDiv')
    // titleTag.innerText = albums[0].strAlbum
    // mainDescdiv.appendChild(titleTag)
    // descDiv.appendChild(mainDescdiv)
    // // seperation
    // for(let i = 1; i < 4; i++) {
    //     let albumDiv = document.createElement('div');
    //     let titleTag = document.createElement('p'); 
    //     titleTag.innerText = albums[i].strAlbum
    //     albumDiv.appendChild(titleTag)
    //     mainDescdiv.appendChild(albumDiv)
    
}
// ==============================================================================
// create 4 elements
// set 4 innerTexts
// append each to respective div 
// after function put inside async use argument as albums.strAlbum[i]