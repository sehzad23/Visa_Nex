import Reveal from "../common/Reveal";
import TestimonialCard from "../common/TestimonialCard";
import { testimonialsData } from "../data/testimonialsData";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden bg-noise"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.03] to-transparent pointer-events-none"></div>

      <Reveal className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-medium text-3xl tracking-tight mb-2">
              What Our Travelers Say
            </h2>

            <p className="text-gray-400 font-normal text-base tracking-tight">
              Real experiences from our amazing clients around the world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default TestimonialsSection;