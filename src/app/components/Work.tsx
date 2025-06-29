import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? workData : workData.slice(0, 4);

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">My Work</h4>
      <h2 className="text-center text-5xl font-ovo">Recent Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Here are some of my recent projects that showcase my skills in web and
        app development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold text-sm">{project.title}</h2>
                  <p className="text-xs text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_#000] group-hover:bg-lime-300 transition">
                  <Image src={assets.send_icon} alt="" className="w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {workData.length > 4 && (
        <motion.button
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-2xl py-3 px-10 mx-auto my-20 hover:bg-lighthover duration-500"
        >
          {showAll ? "Show Less" : "Show More"}
          <Image
            src={assets.right_arrow_bold}
            alt=""
            className={`w-4 transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </motion.button>
      )}
    </div>
  );
};

export default Work;
