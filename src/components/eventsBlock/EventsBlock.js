import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function EventsBlock() {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide className="flex items-center justify-center">
        {({ isActive }) => (
          <a href="#">
            <img
              src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/10-Great-Restaurants-to-Celebrate-a-Birthday-in-Dubai-Cover-21-09.jpg"
              alt="birthday"
              className={`block h-[420px] rounded-xl transition-opacity ${
                isActive ? "null" : "opacity-60"
              }`}
            />
          </a>
        )}
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center">
        {({ isActive }) => (
          <a href="#">
            <img
              src="https://cdn.securem2.com//commonimages/pages/2021/12/holiday-type-meal.jpg"
              alt="birthday"
              className={`block h-[420px] rounded-xl transition-opacity ${
                isActive ? "null" : "opacity-60"
              }`}
            />
          </a>
        )}
      </SwiperSlide>
    </Swiper>
  );
}

export default EventsBlock;
