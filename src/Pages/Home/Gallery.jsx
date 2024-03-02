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
          <SwiperSlide key={index} className="w-72">
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
    video: "https://www.youtube.com/embed/E85oM1URCZ0?si=CaIKkuDcd9_W03Nk",
  },
  {
    image: "https://i.ibb.co/vZTJhXf/3.png",
  },
  {
    video: "https://www.youtube.com/embed/8M2tfT6vntA?si=QZtKUD-hyxcdz0Dk",
  },
  {
    image: "https://i.ibb.co/dcynVtk/4.png",
  },
  {
    video: "https://www.youtube.com/embed/Wet4AMgsIu0?si=wunZYKeVjK9Afz3k",
  },
  {
    image: "https://i.ibb.co/JrDtt7Z/5.png",
  },
  {
    video: "https://www.youtube.com/embed/0oTjJBSssII?si=QJd_A1f558yhhcMM",
  },
  {
    image: "https://i.ibb.co/jf1091b/6.png",
  },
  {
    video: "https://www.youtube.com/embed/d9byjTHciUw?si=lxEOXINnw1z2trQG",
  },
  {
    image: "https://i.ibb.co/YjXHtq4/7.png",
  },
  {
    video: "https://www.youtube.com/embed/ZnAUcBM6QxE?si=sdBoJlJR9IQViIEV",
  },
  {
    image: "https://i.ibb.co/jwb128r/8.png",
  },
  {
    video: "https://www.youtube.com/embed/wVoYNXAU958?si=8PFfFNAeAdO1U9es",
  },
  {
    image: "https://i.ibb.co/XZKdpbB/9.png",
  },
  {
    video: "https://www.youtube.com/embed/k45eMdggg_8?si=ySMfraJDzO0XSkzq",
  },
  {
    image: "https://i.ibb.co/31qRqTF/10.png",
  },
  {
    video: "https://www.youtube.com/embed/JouK9kfjzEw?si=JOGzKb-_p65ytDwS",
  },
  {
    image: "https://i.ibb.co/5nCvSGP/11.png",
  },
  {
    video: "https://www.youtube.com/embed/GJFreVM-ihQ?si=RRP1wrvCecFWeD2p",
  },
  {
    image: "https://i.ibb.co/dBF9P88/12.png",
  },
  {
    image: "https://i.ibb.co/1K9wjsX/13.png",
  },
];
