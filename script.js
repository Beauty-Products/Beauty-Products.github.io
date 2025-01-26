const btnMostrar = document.getElementById('btn-nosotros');
    const btnAtras = document.getElementById('atras');
    const divNosotros = document.querySelector('.nosotros');

    btnMostrar.addEventListener('click', () => {
      divNosotros.style.top = '1%';
    });

    btnAtras.addEventListener('click', () => {
      divNosotros.style.top = '-90%';
    });
