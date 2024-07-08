const PopularSearches = ({ onSearch }) => {
  const searchTerms = [
    { id: 1, title: 'React' },
    { id: 2, title: 'Vue' },
    { id: 3, title: 'Angular' },
    { id: 4, title: 'Mid-Level' },
    { id: 5, title: 'Senior' },
    { id: 6, title: 'Laravel' },
  ];

  const handleSearch = (term) => {
    onSearch(term);
  };

  return (
    <div className="flex items-center w-full gap-2 my-6 md:flex-row">
      <span className="ml-1 text-gray-600 text-[15px] font-medium">Popular Terms:</span>
      <div className="flex items-center gap-3 lg:max-w-full max-w-[450px] overflow-x-auto md:gap-5">
        {searchTerms.map(term => (
          <span key={term.id} onClick={() => handleSearch(term.title)} className="border md:mb-0 mb-3 border-emerald-500 rounded-full px-3 whitespace-nowrap text-emerald-500 bg-gray-200 text-[15px] cursor-pointer hover:bg-emerald-100 transition-all duration-200">
            {term.title}
          </span>
        ))}
      </div>
    </div>
  );
};
export default PopularSearches;