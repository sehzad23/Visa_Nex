const FAQCard = ({ icon, question, answer }) => {
  return (
    <div>
      <div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-black mb-6 shadow-sm">
        <iconify-icon
          icon={icon}
          className="text-lg"
          style={{ strokeWidth: "1.5" }}
        ></iconify-icon>
      </div>

      <h3 className="font-medium text-lg text-black tracking-tight mb-2">
        {question}
      </h3>

      <p className="text-gray-500 font-normal text-sm leading-relaxed">
        {answer}
      </p>
    </div>
  );
};

export default FAQCard;