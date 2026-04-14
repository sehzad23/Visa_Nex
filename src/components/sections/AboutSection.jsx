import Reveal from "../common/Reveal";
import about_img from "../../assets/images/about-img.avif"
const AboutSection = () => {
  return (
    <section
      id="about"
      className="pb-24 bg-[#FAFAFA] border-b border-gray-100 overflow-hidden"
    >
      <Reveal className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
              <iconify-icon
                icon="solar:info-circle-linear"
                className="text-black text-sm"
                style={{ strokeWidth: "1.5" }}
              ></iconify-icon>

              <span className="text-xs font-medium text-black tracking-wide uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="font-medium text-4xl md:text-5xl lg:text-6xl tracking-tighter text-black mb-6 leading-[1.1]">
              Your trusted partner
              <br />
              in global exploration.
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-lg tracking-tight">
              Our mission is to create memorable travel experiences with
              personalized planning, affordable pricing, and complete travel
              support. We handle the complexities so you can focus on making
              memories.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-medium tracking-tighter text-black mb-1">
                  3k+
                </p>

                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                  Happy Travelers
                </p>
              </div>

              <div>
                <p className="text-3xl font-medium tracking-tighter text-black mb-1">
                  5+
                </p>

                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-200/50">
              <img
                src={about_img}
                className="w-full h-full object-cover"
                alt="Travel Landscape"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] hidden md:block w-64">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-4">
                <iconify-icon
                  icon="solar:verified-check-linear"
                  className="text-xl text-white"
                  style={{ strokeWidth: "1.5" }}
                ></iconify-icon>
              </div>

              <p className="text-sm font-medium text-black mb-1">
                Certified Agency
              </p>

              <p className="text-xs text-gray-500 leading-relaxed">
                Recognized globally for excellence in premium travel services.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutSection;