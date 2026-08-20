//find all elements that the class album has
const albums = document.querySelectorAll(".album")

//tell java what to do when an album is clicked
albums.forEach(function(album) {
    album.addEventListener("click", function() {
        const songs = album.querySelector(".songs")

        if (songs.style.display === "block") {
            songs.style.display = "none"
        } else {
            songs.style.display = "block"
        }
    })
})

