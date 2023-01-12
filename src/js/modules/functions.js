/* Webp support check*/
export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src =
			"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		let className = support == true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	});
}

/*Burger-menu*/
const iconMenu = document.querySelector(".navigation-header__icon");
const menuBody = document.querySelector(".menu-header__list");

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle("_lock");
		iconMenu.classList.toggle("_active");
		menuBody.classList.toggle("_active");
	});
}

/*Toggle active link for header-navigation*/
const currentLocation = location.href;
const menuItem = document.querySelectorAll(".menu-header__link");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
	if (menuItem[i].href === currentLocation) {
		menuItem[i].className = "menu-header__link--active";
	}
}

/* Modal-window Login*/
const btn = document.querySelectorAll(".office-btn--login");
const modalOverlay = document.querySelector(".modal-overlay");

btn.forEach(el => {
	el.addEventListener("click", e => {
		let path = e.currentTarget.getAttribute("data-path");

		document
			.querySelector(`[data-target="${path}"]`)
			.classList.add("modal--visible");
		modalOverlay.classList.add("modal-overlay--visible");
		document.body.style.overflow = "hidden";
	});
});

modalOverlay.addEventListener("click", e => {
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove("modal-overlay--visible");
		document.body.style.overflow = "";
	}
});
