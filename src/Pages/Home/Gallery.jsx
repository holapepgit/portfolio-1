// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Gallery() {
  return (
    <div className="py-5 bg-primary">
      <div className="lg:mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-white">Gallery</h2>
        <div className="mx-auto w-28 h-1 mb-5 bg-secondary"></div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        initialSlide={1}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper">
        {youtubeVideosLink.map((item, index) => (
          <SwiperSlide key={index}>
            <iframe height="100%" width="100%" src={item}></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const youtubeVideosLink = [
  "https://www.youtube.com/embed/tgbNymZ7vqY?mute=1",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
];
