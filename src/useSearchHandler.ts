import { useState } from "react";
import type { MediaItem } from "./types";

const useSearchHandler = () => {
  const [message, setMessage] = useState("");
  const [data, setData] = useState<{podcastResult:MediaItem[],movieResult:MediaItem[]}>({podcastResult:[],movieResult:[]});

  const handleSearch = async (searchTerm: string) => {
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
        const  data  = await res.json();
        setData({
          podcastResult: data.podcastResult.results,
          movieResult: data.movieResult.results
        });

        if (data.podcastResult.length === 0) {
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
  return { handleSearch, message, data, setData };
};
export default useSearchHandler;


