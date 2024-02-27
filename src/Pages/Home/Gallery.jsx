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
            {item.video ? (
              <iframe
                width="100%"
                height="100%"
                src={item.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            ) : (
              <img
                src={item.image}
                alt="gallery"
                className="w-full h-full object-cover"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const youtubeVideosLink = [
  {
    image: "https://i.ibb.co/0Gm5rGn/9ecedc00-29ef-47a9-a467-48439b9de4f6.jpg",
  },

  {
    image: "https://i.ibb.co/3R4GZDH/143e66f1-c32e-4b25-8eac-d2c45db6092c.jpg",
  },
  {
    video: "https://www.youtube.com/embed/xY2BjDp5qEs?si=CLYs0JgqkHqriJa6",
  },
  {
    image: "https://i.ibb.co/6y8NkcQ/2a09306c-7e5c-4dc6-bea5-d036f91f5822.jpg",
  },
  {
    image: "https://i.ibb.co/WsYVNQ1/5f1d3684-a487-47d4-84e5-5441fa7620a6.jpg",
  },
];
