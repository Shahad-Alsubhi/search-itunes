import type { MediaItem } from "../types";
import MenuIcon from "./MenuIcon";

function Card({ item, type }: { item: MediaItem; type: "podcast" | "movie" }) {
  const { artistName, artistViewUrl, artworkUrl100, collectionName } = item;

  return (
    <div
      className={`h-[233px] flex flex-col rounded-lg w-[188px] ${
        type === "movie" &&
        "grid grid-cols-[65px_1fr] w-full h-fit! border-b py-1.5 p-1 rounded-b-none border-[#23222a] hover:rounded-none hover:bg-black"
      }`}
    >
      <img
        className={`rounded-sm overflow-hidden bg-neutral-300 w-[188px] h-[188px] ${
          type === "movie" && "w-[50px]! h-[50px]! "
        }`}
        src={artworkUrl100.replace(/\d+x\d+bb/, "200x200bb")}
        alt="artwork image"
      />

      <div
        className={`w-[188px] text-[#46454b] flex flex-row justify-between items-center ${
          type === "movie" && "w-full"
        }`}
      >
        <div>
          <h2
            onClick={() =>
              window.open(artistViewUrl || "https://music.apple.com/", "_blank")
            }
            className=" cursor-pointer text-sm hover:underline text-white font-semibold mt-2 line-clamp-1 "
          >
            {artistName}
          </h2>
          <p className="text-[#8BACD9] text-xs my-1 line-clamp-1">
            {collectionName || "Collection Name Not Available"}
          </p>
        </div>
        <MenuIcon />
      </div>
    </div>
  );
}
export default Card;
