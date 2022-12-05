import React from "react";

const SidebarCardPost = () => {
  return (
    <div className="flex  gap-3 shadow-sm shadow-gray-500 rounded-md overflow-hidden mb-3">
      <div className="w-[30%]">
        <img
          className="w-full rounded-md h-full"
          src="https://xdfile.com/wp-content/uploads/2022/09/Personal-Portfolio-Website-Template-758x569-1.jpg"
        />
      </div>
      <div className="w-[70%] ">
        <a
          href="#"
          className="text-slate-900 dark:text-slate-400 font-bold hover:text-white block pr-3 py-1 text-xs md:text-sm"
        >
          Free Sketch Personal Portfolio Website Template
        </a>
      </div>
    </div>
  );
};

export default SidebarCardPost;
