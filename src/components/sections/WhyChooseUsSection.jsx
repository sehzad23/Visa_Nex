import Reveal from "../common/Reveal";
import FeatureCard from "../common/FeatureCard";
import { whyChooseUsData } from "../data/whyChooseUsData";

const WhyChooseUsSection = () => {
  return (
    <section
      id="why-choose-us"
      className="py-24 bg-white border-b border-gray-100"
    >
      <Reveal className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-medium text-3xl tracking-tight text-black mb-2">
              The Nex Holidays Difference
            </h2>

            <p className="text-gray-500 font-normal text-base tracking-tight">
              Dedicated to elevating your travel experience from start to finish.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUsData.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default WhyChooseUsSection;