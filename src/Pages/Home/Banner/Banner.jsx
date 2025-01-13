// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner_1 from "../../../assets/images/home/banner.jpg";
// import banner_2 from "../../../assets/images/home/banner_2.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${banner_1})`,
            }}
            className="bg-cover bg-blend-multiply bg-no-repeat h-screen bg-black/60 animate-zoomIn"
          ></div>
        </SwiperSlide>
      </Swiper>
      <div className="text-white text-center font-playfair absolute inset-0 flex flex-col justify-center z-10">
        <h5 className="text-2xl uppercase">
          <span className="text-5xl font-semibold">#1</span> Matrimony
        </h5>
        <h2 className="text-7xl font-bold my-3 leading-tight">
          Find your <br /> <span className="text-[#FF0000]">Right Match</span>{" "}
          here
        </h2>
        <h5 className="font-poppins text-xl">
          Most trusted Matrimony Brand in the World.
        </h5>
      </div>
    </div>
  );
};

export default Banner;
