import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { sendForm } from "@emailjs/browser";
import Reveal from "../common/Reveal";

const ContactSection = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY,
      );

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("EmailJS submission error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-[#0A0A0A] relative overflow-hidden bg-noise border-t border-gray-800"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-white/[0.04] to-transparent pointer-events-none"></div>

      <Reveal className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <iconify-icon
          icon="solar:passport-linear"
          className="text-5xl text-white/30 mb-8"
          style={{ strokeWidth: "1.5" }}
        ></iconify-icon>

        <h2 className="font-medium text-4xl md:text-6xl tracking-tighter text-white mb-6 leading-[1.05]">
          Apply for Your Visa Today
        </h2>

        <p className="text-gray-400 text-base md:text-lg mb-12 max-w-2xl mx-auto font-normal tracking-tight">
          Fill out the form below and our visa experts will contact you to guide
          you through the process.
        </p>

        {isSubmitted && (
          <div className="mb-6 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-green-400 text-sm">
            Your application has been submitted successfully.
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          <div className="relative">
            <iconify-icon
              icon="solar:user-linear"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              style={{ strokeWidth: "1.5" }}
            ></iconify-icon>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              {...register("name", { required: "Full name is required" })}
              className="w-full bg-white/[0.03] border border-white/[0.1] text-white text-sm rounded-2xl pl-11 pr-4 py-4 focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-2 text-left">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="relative">
            <iconify-icon
              icon="solar:letter-linear"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              style={{ strokeWidth: "1.5" }}
            ></iconify-icon>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
              className="w-full bg-white/[0.03] border border-white/[0.1] text-white text-sm rounded-2xl pl-11 pr-4 py-4 focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-2 text-left">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <iconify-icon
              icon="solar:phone-linear"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              style={{ strokeWidth: "1.5" }}
            ></iconify-icon>
            <input
              type="number"
              name="contact"
              maxLength={10}
              placeholder="Phone Number"
              {...register("contact", {
                required: "Phone number is required",
                maxLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Only numbers are allowed",
                },
              })}
              className="w-full bg-white/[0.03] border border-white/[0.1] text-white text-sm rounded-2xl pl-11 pr-4 py-4 focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600"
            />
            {errors.contact && (
              <p className="text-red-400 text-xs mt-2 text-left">
                {errors.contact.message}
              </p>
            )}
          </div>

          <div className="relative">
            <iconify-icon
              icon="solar:global-linear"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              style={{ strokeWidth: "1.5" }}
            ></iconify-icon>
            <select
              name="serviceType"
              {...register("serviceType", {
                required: "Please select visa type",
              })}
              className="w-full bg-white/[0.03] border border-white/[0.1] text-white text-sm rounded-2xl pl-11 pr-4 py-4 focus:outline-none focus:border-white/30 transition-colors appearance-none"
            >
              <option value="" className="bg-[#111]">
                Select Visa Type
              </option>
              <option value="tourist" className="bg-[#111]">
                Tourist Visa
              </option>
              <option value="business" className="bg-[#111]">
                Business Visa
              </option>
              <option value="student" className="bg-[#111]">
                Student Visa
              </option>
              <option value="work" className="bg-[#111]">
                Work Visa
              </option>
              <option value="work" className="bg-[#111]">
                USA Visa Appoiment
              </option>
              <option value="work" className="bg-[#111]">
                Passport Services
              </option>
            </select>
            {errors.serviceType && (
              <p className="text-red-400 text-xs mt-2 text-left">
                {errors.serviceType.message}
              </p>
            )}
          </div>

          <div className="md:col-span-2 relative">
            <iconify-icon
              icon="solar:chat-round-dots-linear"
              className="absolute left-4 top-5 text-gray-500"
              style={{ strokeWidth: "1.5" }}
            ></iconify-icon>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your visa requirements..."
              {...register("message")}
              className="w-full bg-white/[0.03] border border-white/[0.1] text-white text-sm rounded-2xl pl-11 pr-4 py-4 focus:outline-none focus:border-white/30 transition-colors placeholder:text-gray-600 resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-gray-200 hover:scale-[1.02] transition-all duration-200 whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </Reveal>
    </section>
  );
};

export default ContactSection;
