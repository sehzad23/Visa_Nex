const Footer = () => {
  return (
    <>
      <footer className="bg-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2 pr-8">
              <a href="#" className="flex items-center gap-2 mb-6">
                <iconify-icon
                  icon="solar:routing-linear"
                  className="text-black text-xl"
                  style={{ strokeWidth: "1.5" }}
                ></iconify-icon>
                <span className="font-medium text-base tracking-tighter text-black uppercase">
                  VISANEX
                </span>
              </a>
              <p className="text-gray-500 font-normal text-sm leading-relaxed mb-6 max-w-xs">
                We create memorable travel experiences with personalized
                planning, affordable pricing, and complete travel support.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <iconify-icon
                    icon="solar:instagram-linear"
                    className="text-xl"
                  ></iconify-icon>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <iconify-icon
                    icon="solar:twitter-linear"
                    className="text-xl"
                  ></iconify-icon>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm text-black mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    Domestic Tours
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    International Tours
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    Flight Booking
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    Visa & Passport
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-sm text-black mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-sm text-black mb-4">
                Contact Information
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:8160380337"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    8160380337
                  </a>
                </li>
                <li>
                  <a
                    href="mailto: overseas.visanex@gmail.com"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    overseas.visanex@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row lg:items-center lg:justify-between gap-4">
            <p className="text-gray-400 text-sm ">
              © {new Date().getFullYear()} VisaNex Visa Cunsoltency. All rights
              reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Developed by{" "}
              <a
                href="https://sehzad-ansari.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className=" underline transition-colors"
              >
                Sehzad Ansari
              </a>
            </p>
            {/* <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              All systems operational
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
