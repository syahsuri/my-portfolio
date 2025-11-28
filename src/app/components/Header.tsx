import { assets, socialLinks } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-16 p-6 md:p-10">
        {/* Description */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h3 className="text-lg sm:text-xl md:text-2xl mb-3 flex justify-center md:justify-start items-center gap-2">
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
            <Image src={assets.hand_icon} alt="Hand Icon" className="w-5" />
          </h3>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-ovo mb-4 leading-snug">
            Software Engineer Dev Based in Indonesia
          </h1>

          <p className="font-ovo text-sm sm:text-base text-gray-700">
            Hi there! I&#39;m a recent Informatics Engineering graduate from
            Lhokseumawe State Polytechnic, and I&#39;m passionate about{" "}
            <span className="font-semibold text-red-500">
              Software Engineering
            </span>
            . With hands-on experience in PHP, Laravel, and JavaScript, I love
            crafting user-friendly, responsive applications. I&#39;m eager to
            join a team where I can tackle exciting projects and grow my skills.
          </p>

          <div className="flex justify-center md:justify-start gap-6 mt-6 text-gray-800 dark:text-black-300">
            <div className="text-center">
              <p className="text-xl font-bold">+3</p>
              <p className="text-xs opacity-70">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">+20</p>
              <p className="text-xs opacity-70">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">+7</p>
              <p className="text-xs opacity-70">Technologies</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
            <a
              href="#contact"
              className="px-6 py-2 rounded-xl bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition"
            >
              Contact Me
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </a>
            <a
              href="/Syah-Sury-Alam-Software-Engineer.pdf"
              download
              className="px-6 py-2 rounded-xl border border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition"
            >
              My Resume
              <Image src={assets.download_icon} alt="" className="w-4" />
            </a>
            <ul className="flex items-center gap-3 sm:gap-5">
              {socialLinks.map((social, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.icon}
                      alt="social icon"
                      className="w-5 sm:w-7"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex-shrink-0 rounded-[2rem] overflow-hidden">
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center">
          <div className="w-1 h-2 bg-gray-500 dark:bg-gray-300 mt-1 rounded-full animate-ping"></div>
        </div>
      </div>
    </div>

    
  );
};

export default Header;
