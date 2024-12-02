let boton=document.getElementsByClassName("bton")[0];
let busca_1=document.getElementById("buscador-1")
let busca_2=document.getElementById("buscador-2");

busca_1.addEventListener("click", function(event) {
    event.preventDefault();  // Evita que el enlace realice su acción predeterminada
    busca_2.style.display = "block";
});

// Ocultar la ventana emergente al hacer clic en "X"
boton.addEventListener("click", function() {
    busca_2.style.display = "none";
}); 