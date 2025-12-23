import { Autoplay, Pagination } from "swiper/modules";

export const swiperConfig = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: { clickable: true },
  modules: [Pagination, Autoplay],
};
