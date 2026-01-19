// import { Autoplay, Pagination } from "swiper/modules";

// export const swiperConfig = {
  
//   slidesPerView: 1,
//   loop: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: { clickable: true },
//   modules: [Pagination, Autoplay],
// };

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const swiperConfig = {
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    clickable: true,
  },

  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },

  modules: [Pagination, Autoplay, Navigation],
};
