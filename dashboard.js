document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  // Número de elementos visibles en el carrusel
  const itemWidth = document.querySelector(".menu-item").offsetWidth;
  const itemsVisible = 3; // Ajusta según el número de elementos que quieras mostrar

  let currentIndex = 0;

  // Función para mover el carrusel
  function moveToSlide(index) {
    const offset = -index * itemWidth; 
    menu.style.transform = `translateX(${offset}px)`;
  }

  // Botones de navegación
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = menu.children.length - itemsVisible;
    }
    moveToSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < menu.children.length - itemsVisible) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveToSlide(currentIndex);
  });

  // Para los botones del carrusel (opcional para un efecto suave)
  nextBtn.addEventListener("click", () => {
    menu.scrollBy({ left: itemWidth, behavior: 'smooth' });
  });

  prevBtn.addEventListener("click", () => {
    menu.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  });
});
