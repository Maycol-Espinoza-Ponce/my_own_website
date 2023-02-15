/*---------------------- Experiment with JavaScript-----------------------------*/

const main_menu = document.querySelector(".main_menu");
const openmain_menuBtn = document.querySelector(".open_main_menu");
const closemain_menuBtn = document.querySelector(".close_main_menu");

function togglemain_menu() {
    main_menu.classList.toggle("main_menu_opened");

}

openmain_menuBtn.addEventListener("click", togglemain_menu);
closemain_menuBtn.addEventListener("click", togglemain_menu);

