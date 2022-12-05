import PostCardSinglePage from "../src/Components/PerCatagoriesSection/PostCardSinglePage";
import SearchBar from "../src/Components/SearchBar";

export default function Home() {
  return (
    <>
      <div className="h-[60vh] flex justify-center items-center gradiant-bg flex-col gap-2">
        <h3 className="text-2xl font-bold md:text-4xl text-center mb-3">
          Uiuxbd is Your helper for Desing idea
        </h3>
        <SearchBar />
        <p className="text-center mt-2">Download Anything here easly</p>
      </div>
      {/* end header serach bar */}
      <h2 className=" text-xl mb-1 md:text-3xl font-bold text-center mt-16">
        Designing Experiences That Enhance Your Digital World
      </h2>
      <p className="text-center text-sm md:text-xl">
        Creating Beautiful Experiences Through UI/UX Design
      </p>
      {/* -----------start post------------- */}
      <div className="px-2 md:px-28 py-16 grid md:grid-cols-3 gap-5 grid-cols-1">
        <PostCardSinglePage />
        <PostCardSinglePage />
        <PostCardSinglePage />
        <PostCardSinglePage />
        <PostCardSinglePage />
        <PostCardSinglePage />
        <PostCardSinglePage />
      </div>
    </>
  );
}
