const FeatureCard = ({
  image,
  tag,
  title,
  description,
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative shadow-sm border border-gray-200/50">
        <img
          src={image}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          alt={title}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          <div className="text-white">
            <p className="text-xs font-medium uppercase tracking-widest mb-1 opacity-80">
              {tag}
            </p>

            <h3 className="text-2xl font-medium tracking-tight">
              {title}
            </h3>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 leading-relaxed px-1">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;