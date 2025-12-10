import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      href: "mailto:hello@girlathon.com",
      text: "hello@girlathon.com",
    },
    {
      icon: (
        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      href: "tel:+442000000000",
      text: "+44 (0)20 0000 0000",
    },
  ];

  const quickLinks = [
    { label: "Code of Conduct", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Volunteer", href: "#" },
  ];

  const socialLinks = [
    { label: "Facebook", icon: "f", href: "#" },
    { label: "Twitter", icon: "𝕏", href: "#" },
    { label: "LinkedIn", icon: "in", href: "#" },
    {
      label: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: "#",
    },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription submitted");
  };

  return (
    <footer 
      className="animate-fadeIn bg-gradient-to-b from-[#f7f0ff] to-[#f0e6ff] px-6 md:px-12 lg:px-20 pt-12 pb-6 font-[Poppins] text-gray-700"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 mb-10">
          
          {/* Left Column */}
          <div className="lg:w-[45%] animate-slideUp">
            <div className="mb-8">
              <h1 
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a2be2] to-[#da70d6] tracking-tight select-none animate-slideUp"
              >
                GIRLATHON
              </h1>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-600 max-w-md">
              A playful, supportive hackathon weekend centering women & non-binary technologists 
              building soft, powerful futures.
            </p>

            <div className="space-y-4 mb-8">
              {contactLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-3">
                  {link.icon}
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                  >
                    {link.text}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-[45%] animate-slideUp delay-200">
            <h2 className="mb-4 text-2xl font-bold text-gray-600 animate-slideUp">
              Stay in the loop
            </h2>
            
            <p className="mb-8 text-gray-600 leading-relaxed">
              Join our community for the latest on events, workshops, mentorship opportunities, and groundbreaking projects.
            </p>

            <form onSubmit={handleSubmit} className="mb-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  required
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-[#8a2be2] to-[#da70d6] text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-700">
                Follow us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-700 
                    hover:bg-purple-50 hover:text-purple-600 
                    transition-all duration-300 shadow-sm hover:shadow-md 
                    hover:scale-110"
                  >
                    {typeof social.icon === 'string' ? (
                      <span className="font-bold text-lg">{social.icon}</span>
                    ) : (
                      social.icon
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Girlathon Collective. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2">
            {legalLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.href}
                  className="hover:text-purple-600 transition-colors duration-300 px-2 py-1 hover:underline"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-300">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
