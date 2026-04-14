import Reveal from "../common/Reveal";
import FAQCard from "../common/FAQCard";
import { faqData } from "../data/faqData";

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-white border-b border-gray-100">
      <Reveal className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="font-medium text-3xl tracking-tight text-black mb-2">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 font-normal text-base tracking-tight">
            Everything you need to know before you book.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {faqData.map((item, index) => (
            <FAQCard key={index} {...item} />
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default FAQSection;