import Reveal from "../common/Reveal";
import MapLocationDot from "../common/MapLocationDot";
import { networkLocations } from "../data/networkLocations";
import Map_img from "../../assets/images/Map_img_new.avif"

const GlobalNetworkSection = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <Reveal className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
        <h2 className="font-medium text-3xl tracking-tight text-black mb-2">
          Global Support Network
        </h2>

        <p className="text-gray-500 font-normal text-base tracking-tight max-w-xl">
          Wherever you travel, our intelligence teams and local partners
          ensure you have unrestricted access and safety.
        </p>
      </Reveal>

      <Reveal className="max-w-7xl mx-auto px-6">
        <div
          className="relative w-full aspect-[4/3] md:aspect-[2.5/1] bg-black rounded-3xl border border-gray-200/60 overflow-hidden flex items-center justify-center shadow-inner"
          style={{
            backgroundImage: `url(${Map_img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/15"></div>

          {networkLocations.map((location, index) => (
            <MapLocationDot key={index} {...location} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default GlobalNetworkSection;