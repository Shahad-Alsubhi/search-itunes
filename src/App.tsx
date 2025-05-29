import SearchInput from "./Components/SearchInput";
import PodcastsContainer from "./Components/PodcastsContainer";
import EpisodesContainer from "./Components/MoviesContainer";
import { useState } from "react";
import useHandleClick from "./useSearchHandler";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSearch, message, data } = useHandleClick();

  return (
    <div className="grid grid-cols-[225px_1fr] bg-[#161727] max-md:grid-cols-1 h-screen w-screen text-white">
      <div className="h-screen border-r p-6 bg-[#131423] border-[#23222a] max-md:hidden">
        <img src="/logoItunes.webp" alt="logo" width={50} height={50} />
      </div>
      <div className=" relative w-full hide-scrollbar overflow-y-scroll flex flex-col gap-6 pb-11 ">
        <header className=" sticky py-2 pb-4 bg-[#161727df]  backdrop-blur-lg top-0 left-0 [&>*]:first:md:hidden p-2 flex flex-row gap-1">
          <img src="/logoItunes.webp" alt="logo" width={40} height={40} />
          <SearchInput
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />
        </header>
        {!searchTerm ? (
          <p className="mx-auto mt-6">Type in a search term to start</p>
        ) : message ? (
          <p className="mx-auto mt-6">{message}</p>
        ) : data.podcastResult.length === 0 &&
          data.movieResult.length === 0 &&
          !message ? (
          <p className="mx-auto mt-6">No results found!</p>
        ) : (
          <>
            <PodcastsContainer
              searchTerm={searchTerm}
              data={data.podcastResult}
            />
            <EpisodesContainer
              searchTerm={searchTerm}
              data={data.movieResult}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
