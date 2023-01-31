var btnTrailer = document.querySelector(".abrir-modal");
var btnFechar = document.querySelector(".fechar-modal");
var modal = document.querySelector(".modal");
var trailer = document.getElementById("trailer")
var linkTrailer = trailer.src;

function alternarModal () {
    modal.classList.toggle("aparecer-modal")
}

btnTrailer.addEventListener("click", () => {
    alternarModal()
    trailer.setAttribute("src", linkTrailer)
})

btnFechar.addEventListener("click", () => {
    alternarModal()
    trailer.setAttribute("src", "")
})

