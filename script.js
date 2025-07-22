const botonAbrir = document.querySelector(".banner__button")

const botonCerrar = document.querySelector(".aviso__boton")
const aviso = document.querySelector(".aviso")


botonAbrir.addEventListener("click",(event) => {
    aviso.style.display = "block"
})

botonCerrar.addEventListener("click",(event) =>{
    aviso.style.display = "none";
})