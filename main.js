

const darkThemeRadio = document.querySelector("#dark-theme");
const lightThemeRadio = document.querySelector("#light-theme");

const p = document.querySelectorAll('p');
const h3 = document.querySelectorAll('h3');
const h2 = document.querySelectorAll('h2');
const h1 = document.querySelectorAll('h1');
const label = document.querySelectorAll('label');

const body = document.querySelectorAll('body');
const button = document.querySelectorAll('button');

darkThemeRadio.addEventListener("click", checkDarkClick);
lightThemeRadio.addEventListener("click", checkLightClick);

function checkDarkClick(){
  if (darkThemeRadio.checked){
    addDarkTheme(p);
    addDarkTheme(h3);
    addDarkTheme(h2);
    addDarkTheme(h1);
    addDarkTheme(label);
    addDarkTheme(body);
    addDarkTheme(button);
  }
}

function checkLightClick(){
  if(lightThemeRadio.checked){
    removeDarkTheme(p);
    removeDarkTheme(h3);
    removeDarkTheme(h2);
    removeDarkTheme(h1);
    removeDarkTheme(label);
    removeDarkTheme(body);
    removeDarkTheme(button);
  }
}

function addDarkTheme(e){
  e.forEach(e => e.classList.add("is-Dark"))
}

function removeDarkTheme(e){
  e.forEach(e => e.classList.remove("is-Dark"))
}