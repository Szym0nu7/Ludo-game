function toggleMenu(){
    let openThemes = document.querySelectorAll('.list-categories');
    openThemes.forEach(x => x.classList.toggle('active'));
  }