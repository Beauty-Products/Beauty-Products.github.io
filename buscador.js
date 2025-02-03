const input = document.querySelector('.input');
const span = document.querySelector('.span');
const iconoLupa = document.getElementById('icono-lupa');
const iconoX = document.getElementById('icono-x');
const productos = document.querySelectorAll('.productos');
const mensaje = document.querySelector('.mensaje');

// Evento de clic en el icono lupa para buscar
span.addEventListener('click', () => {
  const filtro = input.value.toLowerCase();
  let resultados = 0;

  // Si el campo de búsqueda está vacío, mostrar todos los productos
  if (filtro === '') {
    productos.forEach(producto => {
      producto.style.display = '';  // Muestra todos los productos
    });
    mensaje.style.display = 'none';  // Oculta el mensaje de "No se encontraron resultados"
    return;  // Salir de la función
  }

  // Si no está vacío, hacer la búsqueda
  productos.forEach(producto => {
    const id = producto.id.toLowerCase();
    const texto = producto.textContent.toLowerCase();

    // Mostrar si el id o el texto empiezan con el filtro
    if (id.startsWith(filtro) || texto.startsWith(filtro)) {
      producto.style.display = '';  // Muestra el producto que coincide
      resultados++;
    } else {
      producto.style.display = 'none';  // Oculta los que no coinciden
    }
  });

  // Mostrar el mensaje si no hay resultados
  mensaje.style.display = resultados === 0 ? 'block' : 'none';

  // Cambiar iconos: ocultar lupa, mostrar X
  iconoLupa.style.display = 'none';
  iconoX.style.display = 'block';
});

// Evento de clic en el icono "X" para restablecer la búsqueda
iconoX.addEventListener('click', () => {
  input.value = '';  // Borra el contenido del input
  productos.forEach(producto => {
    producto.style.display = '';  // Muestra todos los productos
  });
  mensaje.style.display = 'none';  // Oculta el mensaje de "No se encontraron resultados"
  
  // Cambiar iconos: mostrar lupa, ocultar X
  iconoLupa.style.display = 'block';
  iconoX.style.display = 'none';

  // Realizar la búsqueda con input vacío
  const filtro = '';
  let resultados = 0;
  productos.forEach(producto => {
    producto.style.display = '';  // Mostrar todos
    resultados++;
  });

  // Mostrar el mensaje si no hay resultados (aunque en este caso siempre habrá)
  mensaje.style.display = resultados === 0 ? 'flex' : 'none';
});
