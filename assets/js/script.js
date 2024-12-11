// Aqui ira todo el tema visual (transiciones, animaciones, etc)

document.addEventListener("DOMContentLoaded", function () {
  let desplegable = document.querySelector(".desplegable");
  let menuDesplegable = document.querySelector(".menu-desplegable");

  // Función para alternar la clase "active" en el menú desplegable
  desplegable.addEventListener("click", function (e) {
    e.preventDefault();
    menuDesplegable.classList.toggle("active");
  });

  // Función para cerrar el menú desplegable cuando se hace clic fuera de él
  document.addEventListener("click", function (e) {
    // Verificar si el clic se realizó fuera del menú desplegable y del botón desplegable
    if (
      !menuDesplegable.contains(e.target) &&
      !desplegable.contains(e.target)
    ) {
      menuDesplegable.classList.remove("active");
    }
  });
});
