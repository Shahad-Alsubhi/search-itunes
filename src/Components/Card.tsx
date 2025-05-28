import type { resultItem } from "../useHandleClick";

function Card({ item }: { item: resultItem }) {
  return (
    <div className="bg-[#15263F] h-[413px] flex flex-col p-4 rounded-lg shadow-lg w-[240px]">
      <img
        width={300}
        height={300}
        className="rounded-lg overflow-hidden bg-neutral-300 w-[200px] h-[200px]"
        src={item.artworkUrl100.replace(/\d+x\d+bb/, "200x200bb")}
        alt="artwork image"
      />
      <h2 className="text-xl font-bold mt-4 line-clamp-1 ">
        {item.artistName}
      </h2>
      <p className="text-[#8BACD9] text-lg my-2 line-clamp-2">
        {item.collectionName}
      </p>
      <div className="mt-auto ">
        <h3 className="text-base text-[#00FFF8] line-clamp-1">{item.kind}</h3>
        <hr className="my-2 text-[#2E405A]" />
        <button  disabled={!item.artistViewUrl}
          className="cursor-pointer flex mx-auto justify-center disabled:text-neutral-400"
          onClick={()=>window.open(item.artistViewUrl, "_blank")}
        >
          Visit now!
        </button>
      </div>
    </div>
  );
}
export default Card;
