import { useState } from "react";

const useHandleClick = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState<resultItem[]>([]);

  const handleClick = async (searchTerm: string) => {
    if (!searchTerm) {
      setMessage("Please enter a search term!");
      return;
    }
    setMessage("Loading...");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/search/${searchTerm}`
      );
      if (!res.ok) {
        setMessage("Something went wrong!");
      } else {
        const { data } = await res.json();
        setData(data.results);
        console.log(data.results);

        if (data.results.length === 0) {
          setMessage("No results found!");
        } else {
          setMessage("");
        }
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }
  };
  return { handleClick, message, data, setData };
};
export default useHandleClick;

export interface resultItem {
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  artistViewUrl: string;
  kind: string;
  artistId: string;
}
