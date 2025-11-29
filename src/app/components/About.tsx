import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData, skillsData } from "@/assets/assets";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-lg font-ovo text-gray-600 mb-2">Introduction</h4>
        <h2 className="text-5xl font-ovo text-gray-900">About Me</h2>
      </div>

      {/* Description below About Me */}
      <div className="max-w-3xl mx-auto mb-20">
        <p className="text-center text-lg leading-relaxed text-gray-700 font-ovo">
          I am a{" "}
          <span className="font-semibold text-red-500">Software Engineer</span>{" "}
          with experience in full-stack web development and real-time systems.
          Throughout my career, I've worked on international projects, building
          internal platforms, and company websites focusing on efficient and
          user-friendly solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Image Section */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative">
                <div className="w-72 sm:w-96 rounded-3xl max-w-none">
                  <Image
                    src={assets.user_image}
                    alt=""
                    className="w-full rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 space-y-10">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              {infoList.map(({ icon, title, description }, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-red-200 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-bl-full transform group-hover:scale-150 transition duration-500"></div>

                  <div className="relative flex flex-col h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition duration-300">
                      <Image
                        src={icon}
                        alt={title}
                        className="w-7 h-7 brightness-0 invert"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-ovo">
                      {title}
                    </h3>

                    <div className="flex-1 overflow-hidden">
                      {title === "Skills" ? (
                        <div className="flex flex-wrap gap-2.5 max-h-48 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-red-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-red-600">
                          {skillsData.map((skill, i) => {
                            const getSkillName = () => {
                              try {
                                const src =
                                  typeof skill === "object" && skill.src
                                    ? skill.src
                                    : "";
                                const filename = src.split("/").pop() || "";
                                const nameWithoutExt =
                                  filename.split(".")[0] || `Skill ${i + 1}`;
                                return nameWithoutExt
                                  .replace(/-/g, " ")
                                  .split(" ")
                                  .map(
                                    (word) =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1)
                                  )
                                  .join(" ");
                              } catch (e) {
                                return `Skill ${i + 1}`;
                              }
                            };

                            const formattedName = getSkillName();

                            return (
                              <div key={i} className="group/skill relative">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                                  <Image
                                    src={skill}
                                    alt={formattedName}
                                    className="w-8 h-8 object-contain"
                                    width={32}
                                    height={32}
                                  />
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/skill:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
                                  {formattedName}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="max-h-48 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-red-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-red-600">
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex gap-1.5">
                  <div className="w-2 h-8 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-8 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-8 bg-red-300 rounded-full"></div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 font-ovo">
                  Tools I Use
                </h4>
              </div>

              <div className="flex flex-wrap gap-4">
                {toolsData.map((tool, index) => (
                  <div
                    key={index}
                    className="group relative w-16 h-16 bg-white rounded-2xl shadow-md hover:shadow-xl border-2 border-gray-100 hover:border-red-500 flex items-center justify-center cursor-pointer transform hover:-translate-y-2 hover:rotate-6 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <Image
                      src={tool}
                      alt="Tool"
                      className="w-8 h-8 relative z-10 group-hover:scale-125 transition duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
