import { assets, infoList, toolsData, skillsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            className="w-full rounded-3xl"
          />
        </div>
        {/* Description */}
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            I am a{" "}
            <span className="font-semibold text-red-500">
              Software Engineer
            </span>{" "}
            with experience in full-stack web development and real-time systems.
            Throughout my career, I&#39;ve worked on international projects,
            building internal platforms, and company websites focusing on
            efficient and user-friendly solutions.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 hover:shadow-black"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                {title === "Languages" ? (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillsData.map((skill, i) => (
                      <Image
                        key={i}
                        src={skill}
                        alt={`${skill.src} icon`}
                        className="w-8 h-8 object-contain"
                        width={32}
                        height={32}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {description}
                  </p>
                )}
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-ovo">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
