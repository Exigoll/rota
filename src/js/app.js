import * as flsFunctions from "./modules/functions.js";
import { swiper } from "./modules/swiper.js";

flsFunctions.isWebp();

const iconMenu = document.querySelector(".navigation-header__icon");
const menuBody = document.querySelector(".menu-header__list");
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
}

const currentLocation = location.href;
const menuItem = document.querySelectorAll("nav ul li a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
	if (menuItem[i].href === currentLocation) {
		menuItem[i].className = "menu-header__link--active";
	}
}
