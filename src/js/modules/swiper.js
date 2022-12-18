import Swiper, { Autoplay, Pagination } from "swiper";

export const swiper = new Swiper(".slider-info", {
	modules: [Pagination, Autoplay],
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	allowTouchMove: true,
	preloadImages: true,
	freeMode: true,
	speed: 4000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true
	}
});
