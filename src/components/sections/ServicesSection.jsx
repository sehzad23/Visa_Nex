import Reveal from "../common/Reveal";
import ServiceCard from "../common/ServiceCard";
import { servicesData } from "../data/servicesData";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-[#FAFAFA]">
      <Reveal className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-medium text-3xl tracking-tight text-black mb-2">
              Our Core Services
            </h2>

            <p className="text-gray-500 font-normal text-base tracking-tight">
              Everything you need for a seamless and memorable travel
              experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default ServicesSection;