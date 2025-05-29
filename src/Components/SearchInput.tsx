import { useMemo } from "react";
import debounce from "lodash/debounce";

const SearchInput = ({
  setSearchTerm,
  handleSearch,
}: {
  setSearchTerm: (e: string) => void;
  handleSearch: (e: string) => void;
}) => {
  const debouncedSearch = useMemo(
    () =>
      debounce(async (searchTerm: string) => {
        handleSearch(searchTerm);
      }, 500),
    []
  );
  return (
    <div className="flex flex-row gap-4 items-center max-md:flex-col w-full justify-center">
      <input
        onChange={(e) => {
          debouncedSearch(e.target.value);
          setSearchTerm(e.target.value);
        }}
        type="text"
        placeholder="Search through over 70 million podcasts and movies.."
        className="border w-[90%] focus:outline-2 focus:border-0 focus:outline-[#7B7BF0]  text-center px-4 py-1 placeholder:text-sm placeholder:text-center border-[#42414a] rounded-xl"
      />
    </div>
  );
};

export default SearchInput;
