import React from "react";
import { TiDownload } from "react-icons/ti";
import SidebarCardPost from "./SidebarCardPost";
const PostSinglePage = () => {
  return (
    <div className="py-24">
      <div className="md:flex md:gap-8 gap-5 block">
        <div className="w-full md:w-[68%]">
          <a href="#" className="text-primary text-sm block my-2 font-bold">
            MOBILE, UI KITS
          </a>
          <h2 className="text-2xl md:text-4xl my-2 dark:text-white text-slate-900 font-bold">
            Ramni – Free eCommerce UI Kit for Adobe XD
          </h2>
          <p className="text-sm md:text-lg text-slate-600 mb-3">
            Free Adobe XD UI Kit by Pankaj Patel
          </p>
          <div>
            <img
              className="w-full my-2"
              src="https://xdfile.com/wp-content/uploads/2022/04/Ramni-Free-eCommerce-UI-Kit-for-Adobe-XD-file-1024x809.jpg"
            />
          </div>
          <div>
            <p className="dark:text-slate-400 text-sm  md:ml-8 ml-2 md:text-xl text-slate-700">
              A multipurpose UI KIT for all Mobile Apps, designed with classic
              design style without leaving a shopping feel. Suitable for all
              businesses or startups that provide services. Modifying the
              template is quite simple. This classy design template is easy to
              customize, making it even easier for you to design your next app,
              projects, and speed up your design workflow. Thanks to Pankaj
              Patel for sharing this freebie!
            </p>

            <h3 className="text-2xl md:text-3xl font-bold my-5 md:ml-8 ml-2">
              File Info:
            </h3>
            <ul className="text-slate-800 dark:text-slate-400 my-5 md:ml-8 ml-2 text-sm md:text-xl">
              <li>
                <span className="font-bold">Available Format: </span> .Xd file
              </li>
              <li>
                <span className="font-bold">Category:</span> UI Kit
              </li>
              <li>
                <span className="font-bold">License: </span>Free for your next
                personal project
              </li>
              <li>
                <span className="font-bold"> file Size:</span> 5.8
              </li>
              <li>
                <span className="font-bold">Download file type:</span> Zip
              </li>
              <li>
                <span className="font-bold">Author: </span>Pankaj Patel
              </li>
            </ul>

            {/*---------------------------- download button */}

            <button className="max-w-[662px mx-auto flex items-center  bg-primary gap-3 my-5 rounded-full overflow-hidden pr-5 cursor-pointer hover:shadow-lime-50 hover:shadow-sm hover:font-bold transition-all ">
              <span className="w-[90px] bg-secondary flex justify-center py-3">
                <TiDownload className="text-slate-900 " size={35} />
              </span>
              <span>Download “Free Ramni E-commerce UI Kit”</span>
            </button>
          </div>
        </div>
        {/* siderBar */}
        <div className="w-full md:w-[32%] my-5">
          <div>
            <span className="bg-secondary text-center font-bold p-3 block mb-5">
              Related Post
            </span>
            <SidebarCardPost />
            <SidebarCardPost />
            <SidebarCardPost />
            <SidebarCardPost />
            <SidebarCardPost />
            <SidebarCardPost />
            <SidebarCardPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSinglePage;
