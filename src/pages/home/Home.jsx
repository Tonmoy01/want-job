import { useState } from 'react';
import Filters from '../../components/Filters';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import WelcomeText from '../../components/WelcomeText';
import { jobs } from './../../data/jobs';
import Searchbar from '../../components/Searchbar';
import ListedJobs from '../../components/ListedJobs';
import PopularSearches from '../../components/PopularSearches';

const Home = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [savedJobs, setSavedJobs] = useState([]);

  const handleFilterChange = (filters, workStatus) => {
    let filtered = [...jobs];

    if (filters.contractStatus.length > 0) {
      filtered = filtered.filter((job) =>
        filters.contractStatus.includes(job.contractStatus)
      );
    }

    if (filters.workStatus.length > 0) {
      filtered = filtered.filter((job) =>
        filters.workStatus.includes(job.workStatus)
      );
    }

    setFilteredJobs(filtered);
  };

  const handleSearch = (query) => {
    const filtered = jobs.filter(job => job.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

    setFilteredJobs(filtered);
  };

  return (
    <div className='w-full'>
      <Hero />
      <Services />
      <div className='w-full mt-12 mb-16'>
        <WelcomeText />
        <div className='relative flex flex-col items-start w-full px-5 md:flex-row md:px-16 gap-9'>
          <Filters savedJobs={savedJobs} onFilterChange={handleFilterChange} />
          <div className='w-full'>
            <Searchbar onSearch={handleSearch} />
            <PopularSearches onSearch={handleSearch} />
            <ListedJobs jobs={filteredJobs} savedJobs={savedJobs} setSavedJobs={setSavedJobs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
