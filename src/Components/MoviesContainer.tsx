import type { MediaItem } from "../types";
import Card from "./Card";
import MenuIcon from "./MenuIcon";

const MoviesContainer = ({
  data,
  searchTerm,
}: {
  data: MediaItem[];
  searchTerm: string;
}) => {
  return (
    <div>
      <header className="flex flex-row justify-between items-center pr-4">
        <h1 className="my-6 px-6">Top movies for {searchTerm} </h1>
        <MenuIcon />
      </header>
      <div className="pl-6 grid grid-cols-3 max-md:grid-cols-1 gap-x-4 gap-y-2 w-full p-4 pt-1 border-t border-[#23222a] ">
        {data.map((item, index) => (
          <Card type={"movie"} key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
