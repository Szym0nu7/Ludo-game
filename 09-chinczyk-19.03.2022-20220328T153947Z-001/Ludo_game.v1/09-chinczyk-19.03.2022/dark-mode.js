let darkMode = localStorage.getItem("darkMode");

const LightMode = () => {
  document.body.classList.remove('darkmode');
  document.body.classList.remove('ultradarkmode');

  localStorage.setItem('darkMode', 'light');
};
const DarkMode = () => {
  document.body.classList.remove('ultradarkmode');
  document.body.classList.add('darkmode');
  
  localStorage.setItem('darkMode', 'dark');
};
const UltraDarkMode = () => {
  document.body.classList.remove('darkmode');
  document.body.classList.add('ultradarkmode');
  
  localStorage.setItem('darkMode', 'ultra');
};

if (darkMode === 'dark'){
  DarkMode();
} else if (darkMode === 'ultra'){
  UltraDarkMode();
}

function theme(n){
  switch(n){
    case 1:
      LightMode();
      console.log(darkMode);
    break;
    case 2:
      DarkMode();
      console.log(darkMode);
    break;
    case 3:
      UltraDarkMode();
      console.log(darkMode);
    break;
  }
}
