const TestimonialCard = ({ review, name, role }) => {
  return (
    <div className="group bg-white/[0.02] border border-white/[0.08] hover:border-white/20 rounded-2xl p-6 lg:p-8 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="flex-1 w-full relative z-10 text-center sm:text-left">
        <iconify-icon
          icon="solar:quote-right-bold-duotone"
          className="text-4xl text-white/10 mb-4 inline-block"
        ></iconify-icon>

        <p className="text-lg text-gray-300 italic leading-relaxed mb-6">
          "{review}"
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-white/[0.08] pt-4 gap-4">
          <div>
            <div className="text-xl font-medium tracking-tighter mb-1">
              {name}
            </div>

            <div className="text-xs text-gray-400 uppercase tracking-widest">
              {role}
            </div>
          </div>

          <div className="flex text-yellow-500 text-sm">
            <iconify-icon icon="solar:star-bold"></iconify-icon>
            <iconify-icon icon="solar:star-bold"></iconify-icon>
            <iconify-icon icon="solar:star-bold"></iconify-icon>
            <iconify-icon icon="solar:star-bold"></iconify-icon>
            <iconify-icon icon="solar:star-bold"></iconify-icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;