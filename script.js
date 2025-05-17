function mostrarPantalla(id) {
  const pantallas = document.querySelectorAll('.pantalla');
  pantallas.forEach(p => p.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(s => s.classList.add('oculto'));
  document.getElementById(id).classList.remove('oculto');
}
document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('form-acceso');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value;
    const contacto = document.getElementById('contacto').value.trim();
    const aceptado = document.getElementById('privacidad').checked;

    if (nombre && edad && contacto && aceptado) {
      window.location.href = 'dashboard.html';
    } else {
      alert('Por favor completa todos los campos y acepta el aviso de privacidad.');
    }
  });
});
