function btnnosotros() {
    const nosotrosDiv = document.querySelector('.nosotros');
    if (nosotrosDiv) {
      const currentLeft = nosotrosDiv.style.left;
      if (currentLeft === '78%') {
        nosotrosDiv.style.left = '110%';
      } else {
        nosotrosDiv.style.left = '78%';
      }
    }
  }
  
//java script