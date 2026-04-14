const ServiceCard = ({
  title,
  description,
  image,
  features,
  buttonText,
  href,
}) => {
  return (
    <a href={href} className="group block h-full flex flex-col">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-200/50 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-medium text-lg text-black tracking-tight mb-1">
            {title}
          </h3>

          <p className="text-gray-500 text-sm mb-3">
            {description}
          </p>

          <ul className="text-xs text-gray-500 space-y-1.5 mb-4 font-medium">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-3 mt-auto border-t border-gray-100 flex items-center justify-between group-hover:border-black transition-colors">
          <span className="text-sm font-medium text-black">
            {buttonText}
          </span>

          <iconify-icon
            icon="solar:arrow-right-linear"
            className="text-black text-lg group-hover:translate-x-1 transition-transform"
          ></iconify-icon>
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;