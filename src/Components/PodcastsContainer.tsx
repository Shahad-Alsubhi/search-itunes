import type { MediaItem } from "../types";
import Card from "./Card";
import MenuIcon from "./MenuIcon";

const PodcastsContainer = ({
  data,
  searchTerm,
}: {
  data: MediaItem[];
  searchTerm: string;
}) => {
  return (
    <div className="pl-6 pr-4">
      <header className="flex flex-row justify-between items-center">
        <h1 className="my-5">Top podcasts for {searchTerm} </h1>
        <MenuIcon />
      </header>
      <hr className="text-[#23222a] -mx-5 " />
      <div className=" flex flex-row gap-4 w-full scroll overflow-x-scroll py-4  ">
        {data.map((item, index) => (
          <Card type={"podcast"} key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PodcastsContainer;
