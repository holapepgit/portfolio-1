import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Gallery() {
  return (
    <div className="py-5 bg-primary">
      <div className="lg:mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-white">Gallery</h2>
        <div className="mx-auto w-16 h-1 mb-5 bg-secondary"></div>
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
    video: "https://www.youtube.com/embed/E85oM1URCZ0?si=CaIKkuDcd9_W03Nk",
  },
  {
    video: "https://www.youtube.com/embed/8M2tfT6vntA?si=QZtKUD-hyxcdz0Dk",
  },
  {
    video: "https://www.youtube.com/embed/Wet4AMgsIu0?si=wunZYKeVjK9Afz3k",
  },
  {
    video: "https://www.youtube.com/embed/0oTjJBSssII?si=QJd_A1f558yhhcMM",
  },
  {
    video: "https://www.youtube.com/embed/d9byjTHciUw?si=lxEOXINnw1z2trQG",
  },
  {
    video: "https://www.youtube.com/embed/ZnAUcBM6QxE?si=sdBoJlJR9IQViIEV",
  },
  {
    video: "https://www.youtube.com/embed/wVoYNXAU958?si=8PFfFNAeAdO1U9es",
  },
  {
    video: "https://www.youtube.com/embed/k45eMdggg_8?si=ySMfraJDzO0XSkzq",
  },
  {
    video: "https://www.youtube.com/embed/JouK9kfjzEw?si=JOGzKb-_p65ytDwS",
  },
  {
    video: "https://www.youtube.com/embed/GJFreVM-ihQ?si=RRP1wrvCecFWeD2p",
  },
];
