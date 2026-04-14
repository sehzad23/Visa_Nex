import Reveal from "../common/Reveal";

const StatsSection = () => {
  return (
    <section className="border-y border-gray-200 bg-white py-8">
      <Reveal className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <iconify-icon
            icon="solar:shield-check-linear"
            className="text-xl text-black"
            style={{ strokeWidth: "1.5" }}
          ></iconify-icon>

          <div>
            <p className="text-sm font-medium text-black">Expert Planners</p>
            <p className="text-xs text-gray-400">Tailored trip itineraries</p>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-100"></div>

        <div className="flex items-center gap-3">
          <iconify-icon
            icon="solar:global-linear"
            className="text-xl text-black"
            style={{ strokeWidth: "1.5" }}
          ></iconify-icon>

          <div>
            <p className="text-sm font-medium text-black">Global Access</p>
            <p className="text-xs text-gray-400">Domestic & International</p>
          </div>
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-100"></div>

        <div className="flex items-center gap-3">
          <iconify-icon
            icon="solar:tag-price-linear"
            className="text-xl text-black"
            style={{ strokeWidth: "1.5" }}
          ></iconify-icon>

          <div>
            <p className="text-sm font-medium text-black">Best Value</p>
            <p className="text-xs text-gray-400">
              Affordable travel packages
            </p>
          </div>
        </div>

        <div className="hidden lg:block w-px h-8 bg-gray-100"></div>

        <div className="flex items-center gap-3">
          <iconify-icon
            icon="solar:headphones-round-sound-linear"
            className="text-xl text-black"
            style={{ strokeWidth: "1.5" }}
          ></iconify-icon>

          <div>
            <p className="text-sm font-medium text-black">Complete Support</p>
            <p className="text-xs text-gray-400">24/7 travel assistance</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default StatsSection;