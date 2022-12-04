import PostCardSinglePage from "../src/Components/PerCatagoriesSection/PostCardSinglePage";
import SearchBar from "../src/Components/SearchBar";

export default function Home() {
  return (
    <>
      <div className="h-[60vh] flex justify-center items-center gradiant-bg flex-col gap-2">
        <h3 className="text-4xl text-center mb-3">
          Uiuxbd is Your helper for Desing idea
        </h3>
        <SearchBar />
        <p className="text-center mt-2">Download Anything here easly</p>
      </div>
      {/* end header serach bar */}
      {/* -----------start post------------- */}
      <div className="px-16 py-16 grid md:grid-cols-3 gap-5 grid-cols-1">
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
