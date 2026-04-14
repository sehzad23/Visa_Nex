import Reveal from "../common/Reveal";
import image_1 from "../../assets/images/hero_img-1.avif"
import image_2 from "../../assets/images/hero_img-2.avif"
import image_3 from "../../assets/images/hero_img-3.avif"

const HeroSection = () => {
  return (
    <header
      id="hero"
      className="relative pt-32  lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center "
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-[#FAFAFA] to-[#FAFAFA] -z-10"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
          <span className="text-xs font-medium text-black tracking-wide uppercase">
            Your Journey Begins Here
          </span>
        </div>

        <h1 className="font-medium text-5xl md:text-7xl lg:text-8xl tracking-tighter text-black leading-[1.05] mb-6">
          Memorable journeys
          <br />
          crafted for you.
        </h1>

        <p className="font-normal text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl mx-auto tracking-tight">
          Discover personalized planning, affordable pricing, and complete
          travel support for your domestic and international adventures.
        </p>
      </div>

      <Reveal className="max-w-7xl mx-auto px-6 mt-20 w-full hidden md:grid grid-cols-3 gap-6 opacity-90 hover:opacity-100 transition-opacity duration-500">
        <div className="h-[40vh] rounded-2xl overflow-hidden relative translate-y-8">
          <img
            src={image_1}
            className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            alt="Tokyo"
          />
        </div>

        <div className="h-[45vh] rounded-2xl overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.1)] z-10">
          <img
           src={image_2}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            alt="Santorini"
          />
        </div>

        <div className="h-[40vh] rounded-2xl overflow-hidden relative translate-y-12">
          <img
            src={image_3}
            className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            alt="Bali"
          />
        </div>
      </Reveal>
    </header>
  );
};

export default HeroSection;