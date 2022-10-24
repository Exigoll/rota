import Swiper, { Pagination } from "swiper";

export const swiper = new Swiper(".slider-info", {
	modules: [Pagination],
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	allowTouchMove: true,
	preloadImages: true,
	freeMode: true,
	speed: 500,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		stopOnLastSlide: false
	}
});
