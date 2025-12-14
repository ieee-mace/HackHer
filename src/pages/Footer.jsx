import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaGlobe,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoCallSharp, IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full min-h-[90vh] flex items-center justify-center
             bg-linear-to-b from-[#f7f0ff] to-[#eae2ff]
             text-gray-800 overflow-hidden"
  style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* 🔳 Subtle Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(138,43,226,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138,43,226,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-20 flex flex-col items-center pt-20 w-full max-w-6xl">

        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-gray-700">
          Contact Us
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-24 mb-16">

          {/* Contact 1 */}
          <div className="flex flex-col items-center hover:scale-105 transition-transform">
            <div className="flex items-center gap-2 mb-1">
              <IoCallSharp className="text-purple-600 text-2xl" />
              <p className="text-xl font-bold">Sneha Biju</p>
            </div>
            <p className="text-lg text-gray-700">+91 99189 23444</p>
          </div>

          {/* Contact 2 */}
          <div className="flex flex-col items-center hover:scale-105 transition-transform">
            <div className="flex items-center gap-2 mb-1">
              <IoCallSharp className="text-purple-600 text-2xl" />
              <p className="text-xl font-bold">Aharon Johnson</p>
            </div>
            <p className="text-lg text-gray-700">+91 94469 46683</p>
          </div>

        </div>

        {/* Location */}
        <div className="flex items-center gap-3 mb-20 hover:scale-105 transition-transform">
          <IoLocationSharp className="text-purple-600 text-3xl" />
          <p className="text-xl font-bold text-center">
            Mar Athanasius College of Engineering, Kothamangalam
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 mb-16">
          {[
            { icon: FaInstagram, url: "https://www.instagram.com/ieeemace/" },
            { icon: FaXTwitter, url: "https://x.com/ieeemace/" },
            { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/ieeemace/" },
            { icon: FaGlobe, url: "https://www.ieeemace.org/" },
            { icon: FaWhatsapp, url: "https://chat.whatsapp.com/BIakPOt0gHkLbksO6RPIcn?mode=hqrc" },
          ].map(({ icon: Icon, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:scale-110 transition-transform"
            >
              <Icon className="text-gray-700 text-2xl md:text-3xl hover:text-purple-700 transition-colors" />
            </a>
          ))}
        </div>

        {/* Title */}
        {/* Pixel Title */}
<pre 
              className="text-[0.7rem] sm:text-[0.8rem] md:text-large lg:text-2xl leading-tight text-center font-bold"
              style={{ color: '#8B6AAF' }}
            >
{`                                            
                                            
██  ██  ▄▄▄   ▄▄▄▄ ▄▄ ▄▄ ██  ██ ▄▄▄▄▄ ▄▄▄▄  
██████ ██▀██ ██▀▀▀ ██▄█▀ ██████ ██▄▄  ██▄█▄ 
██  ██ ██▀██ ▀████ ██ ██ ██  ██ ██▄▄▄ ██ ██ 
  
`}
            </pre>




  <p className="pb-6 font-semibold tracking-wide text-gray-700 text-center text-xs md:text-sm flex items-center justify-center gap-1">
  <span>2026</span>

  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    className="text-gray-700"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M14.8 9.2
         c-0.8-0.8-1.9-1.2-3-1.2
         -2.3 0-4 1.8-4 4
         s1.7 4 4 4
         c1.1 0 2.2-0.4 3-1.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>

  <span>HackHer Team. All Rights Reserved.</span>
</p>


      </div>
    </footer>
  );
};

export default Footer;
