import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I&#39;m Syah Sury Alam{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Software Engineer Dev Based in Indonesia
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        Hi there! I&#39;m a recent Informatics Engineering graduate from
        Lhokseumawe State Polytechnic, and I&#39;m passionate about{" "}
        <span className="font-semibold text-red-500">Software Engineer</span> With hands-on
        experience in PHP, Laravel, and JavaScript, I love crafting
        user-friendly, responsive applications. I&#39;m eager to join a team
        where I can tackle exciting projects and grow my skills. Let&#39;s
        create something amazing together!
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-2xl bg-black text-white flex items-center gap-2">
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-2xl border-gray-500 flex items-center gap-2">
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
