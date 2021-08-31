// =============================================================
// clickable code
// create drop down menu based on parameters of api
// generate results randomAlbum
// append on page
// =============================================================
// Step 1:Api 
const DOMAIN = "https://www.theaudiodb.com/"
const APIkey = "523532"
const BASE_URL =`${DOMAIN}api/v1/json/${APIKEY}/searchalbum.php?s=${ALBUM_NAME}`


// creating a function that appends parameters to drop down menus
// Generating a album name will be the last step

// async function 