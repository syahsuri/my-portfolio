import { assets, socialLinks } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto min-h-screen flex items-center justify-center px-4 relative">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 sm:gap-10 md:gap-16 p-4 sm:p-6 md:p-10 w-full">
        {/* Description */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 flex justify-center md:justify-start items-center gap-2 flex-wrap">
            <span className="font-ovo">
              <Typewriter
                options={{
                  strings: ["Hi! I'm Syah Sury Alam"],
                  autoStart: true,
                  loop: true,
                  delay: 30,
                }}
              />
            </span>
            <Image src={assets.hand_icon} alt="Hand Icon" className="w-4 sm:w-5" />
          </h3>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-ovo mb-4 leading-snug">
            Software Engineer Dev Based in Indonesia
          </h1>

          <p className="font-ovo text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
            Hi there! I&#39;m a recent Informatics Engineering graduate from
            Lhokseumawe State Polytechnic, and I&#39;m passionate about{" "}
            <span className="font-semibold text-red-500">
              Software Engineering
            </span>
            . With hands-on experience in PHP, Laravel, and JavaScript, I love
            crafting user-friendly, responsive applications. I&#39;m eager to
            join a team where I can tackle exciting projects and grow my skills.
          </p>

          <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mt-6 text-gray-800 dark:text-black-300">
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold">+3</p>
              <p className="text-[10px] sm:text-xs opacity-70">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold">+20</p>
              <p className="text-[10px] sm:text-xs opacity-70">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold">+7</p>
              <p className="text-[10px] sm:text-xs opacity-70">Technologies</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 mt-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-5 sm:px-6 py-2 rounded-xl bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Contact Me
              <Image src={assets.right_arrow_white} alt="" className="w-3 sm:w-4" />
            </a>
            <a
              href="/Syah-Sury-Alam-Software-Engineer.pdf"
              download
              className="w-full sm:w-auto px-5 sm:px-6 py-2 rounded-xl border border-gray-500 flex items-center justify-center gap-2 hover:bg-gray-100 transition text-sm sm:text-base"
            >
              My Resume
              <Image src={assets.download_icon} alt="" className="w-3 sm:w-4" />
            </a>
            <ul className="flex items-center gap-2.5 sm:gap-3 md:gap-5">
              {socialLinks.map((social, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={social.icon}
                      alt="social icon"
                      className="w-4 sm:w-5 md:w-7"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden">
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-4 h-7 sm:w-5 sm:h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center">
          <div className="w-1 h-2 bg-gray-500 dark:bg-gray-300 mt-1 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;