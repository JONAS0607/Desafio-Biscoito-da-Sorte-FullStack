// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btn_cookie = document.querySelector("#open")
const btn_other_cookie = document.querySelector("#btnOtherCookie")

// Eventos
btn_cookie.addEventListener('click', toggleScreen)
btn_other_cookie.addEventListener('click', toggleScreen)

// Funções
function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
  screen2.classList.toggle('show');
}


