import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import video1 from "../../assets/video/1.mp4";
import video2 from "../../assets/video/2.mp4";
import video3 from "../../assets/video/3.mp4";
import video4 from "../../assets/video/4.mp4";
import video5 from "../../assets/video/5.mp4";
import video6 from "../../assets/video/6.mp4";
import video7 from "../../assets/video/7.mp4";
import video8 from "../../assets/video/8.mp4";
import video9 from "../../assets/video/9.mp4";
import video10 from "../../assets/video/10.mp4";
import video11 from "../../assets/video/11.mp4";
import video12 from "../../assets/video/12.mp4";
import video13 from "../../assets/video/13.mp4";

export default function Gallery() {
  return (
    <div className="py-5 bg-primary">
      <div className="lg:mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-white">Gallery</h2>
        <div className="mx-auto w-16 h-1 mb-5 bg-secondary"></div>
      </div>
      <Swiper
        lazyPreloaderClass={true}
        lazyPreloadPrevNext={true}
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
        className="mySwiper max-w-6xl mx-auto">
        {youtubeVideosLink.map((item, index) => (
          <SwiperSlide key={index} className="w-72">
            {item.video ? (
              <div className="h-full w-full flex justify-center items-center">
                <video src={item.video} controls className="w-full h-full" />
              </div>
            ) : (
              <img
                loading="lazy"
                src={item.image}
                alt="gallery"
                className="w-full h-full object-cover object-left"
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
    image: "https://i.ibb.co/ySLLJcr/1.png",
  },
  {
    image: "https://i.ibb.co/Snq8NK4/2.png",
  },
  {
    video: video1,
  },
  {
    image: "https://i.ibb.co/vZTJhXf/3.png",
  },
  {
    video: video2,
  },
  {
    image: "https://i.ibb.co/dcynVtk/4.png",
  },
  {
    video: video3,
  },
  {
    image: "https://i.ibb.co/JrDtt7Z/5.png",
  },
  {
    video: video4,
  },
  {
    image: "https://i.ibb.co/jf1091b/6.png",
  },
  {
    video: video5,
  },
  {
    image: "https://i.ibb.co/YjXHtq4/7.png",
  },
  {
    video: video6,
  },
  {
    image: "https://i.ibb.co/jwb128r/8.png",
  },
  {
    video: video7,
  },
  {
    image: "https://i.ibb.co/XZKdpbB/9.png",
  },
  {
    video: video8,
  },
  {
    image: "https://i.ibb.co/31qRqTF/10.png",
  },
  {
    video: video9,
  },
  {
    image: "https://i.ibb.co/5nCvSGP/11.png",
  },
  {
    video: video10,
  },
  {
    image: "https://i.ibb.co/dBF9P88/12.png",
  },
  {
    video: video11,
  },
  {
    image: "https://i.ibb.co/1K9wjsX/13.png",
  },
  {
    video: video12,
  },
  {
    video: video13,
  },
];
