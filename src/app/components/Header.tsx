import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div className="w-11/12 max-w-5xl mx-auto h-screen flex items-center justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-8 p-6 rounded-lg">
        {/* Profile Picture */}
        <div className="flex-shrink-0 p-4 rounded-[2rem]">
          <Image
            src={assets.profile_img}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-[2rem]"
          />
        </div>

        {/* Description */}
        <div className="p-4 max-w-xl">
          <h3 className="text-xl md:text-2xl mb-2 flex items-center gap-2">
            <span className="font-ovo">
              <Typewriter
                options={{
                  strings: ["Hi! I'm Syah Sury Alam"],
                  autoStart: true,
                  loop: true,
                  delay: 30, // default is 75ms, lower = faster
                }}
              />
            </span>
            <Image src={assets.hand_icon} alt="Hand Icon" className="w-5" />
          </h3>

          <h1 className="text-3xl sm:text-4xl font-ovo mb-3">
            Software Engineer Dev Based in Indonesia
          </h1>

          <p className="font-ovo text-base">
            Hi there! I&#39;m a recent Informatics Engineering graduate from
            Lhokseumawe State Polytechnic, and I&#39;m passionate about{" "}
            <span className="font-semibold text-red-500">
              Software Engineering
            </span>
            . With hands-on experience in PHP, Laravel, and JavaScript, I love
            crafting user-friendly, responsive applications. I&#39;m eager to
            join a team where I can tackle exciting projects and grow my skills.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href="#contact"
              className="px-6 py-2 rounded-xl bg-black text-white flex items-center gap-2"
            >
              Contact Me{" "}
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            </a>
            <a
              href="/Syah-Sury-Alam-Software-Engineer.pdf"
              download
              className="px-6 py-2 rounded-xl border border-gray-500 flex items-center gap-2"
            >
              My Resume{" "}
              <Image src={assets.download_icon} alt="" className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
