function btnnosotros() {
    const nosotrosDiv = document.querySelector('.nosotros');
    if (nosotrosDiv) {
      const top = nosotrosDiv.style.top;
      if (top === '-90%') {
        nosotrosDiv.style.top = '1%';
      } else {
        nosotrosDiv.style.top = '-90%';
      }
    }
  }
  
//java script