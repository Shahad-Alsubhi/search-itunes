import { useState } from "react";
import Card from "./Components/Card";
import useHandleClick from "./useHandleClick";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleClick, message, data,setData } = useHandleClick();

  return (
    <div className="px-4 lg:px-56 py-20 bg-[#0D192C] min-h-screen w-screen flex flex-col items-center justify-start text-white">
      <div className="flex flex-row gap-4 items-center max-md:flex-col w-full justify-center">
        <input
          type="text"
          onChange={(e) => {setSearchTerm(e.target.value) ;setData([]);}}
          placeholder="Search..."
          className="border w-full max-w-[300px] px-4 py-1 border-neutral-400 rounded-sm"
        />
        <button
          className="cursor-pointer"
          onClick={() => handleClick(searchTerm)}
        >
          Search
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-8 mt-16">
        {message ? (
          <p>{message}</p>
        )  : (
          data.map((item, index) => <Card key={index} item={item} />)
        )}
      </div>
    </div>
  );
}

export default App;
