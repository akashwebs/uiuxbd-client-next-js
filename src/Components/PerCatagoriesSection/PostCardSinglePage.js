import Link from "next/link";
import React from "react";
import { BsDownload } from "react-icons/bs";

const PostCardSinglePage = () => {
  return (
    <Link href="/test">
      <div className="card w-full bg-base-100 hover:shadow-xl hover:cursor-pointer hover:bg-base-200">
        <figure>
          <img src="https://placeimg.com/420/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body px-6 md:px-8">
          <div className="card-actions justify-start">
            <div className="badge badge-outline  bg-[#666600]">
              <span className="flex gap-2 items-center text-xs text-slate-300">
                <BsDownload />
                1.4k Downloads
              </span>
            </div>
            <div className="badge badge-outline text-xs text-slate-300 bg-[#666600]">
              FIGMA MOBILE TEMPLATES
            </div>
            <div className="badge badge-outline text-xs text-slate-300 bg-[#666600]">
              FIGMA MOBILE TEMPLATES
            </div>
          </div>
          <h2 className="card-title text-sm md:text-xl">
            Exhibition Stall Design Company XD Website Template
          </h2>
          <p className="text-xs text-slate-400">
            Free figma templates By Avi Yansah
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostCardSinglePage;
