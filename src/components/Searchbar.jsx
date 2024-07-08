import { useEffect, useState } from "react";
import { SearchOutline } from "react-ionicons";

const Searchbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery]);

  return <div className="w-full">
    <div className="flex items-center w-full gap-5">
      <div className="flex items-center w-full gap-3 px-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <SearchOutline color='#10B981' />
        <input
          type="text"
          placeholder="Search for job title"
          className="w-full text-gray-700 bg-white rounded-lg outline-none h-14"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  </div>;
};
export default Searchbar;
