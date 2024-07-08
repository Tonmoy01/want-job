import {
  BusinessOutline,
  LocationOutline,
  NewspaperOutline,
  Bookmark,
  BookmarkOutline,
} from 'react-ionicons';
import { useNavigate } from 'react-router-dom';

const ListedJobs = ({ jobs, savedJobs, setSavedJobs }) => {
  const navigate = useNavigate();

  const handleSave = (id) => {
    const item = savedJobs.find(j => j === id);

    if (item) {
      setSavedJobs(savedJobs.filter(j => j !== item));
    } else {
      setSavedJobs(prev => [...prev, id]);
    }
  };

  return (
    <div className='flex flex-wrap items-center justify-between w-full mt-8'>
      {!jobs.length && (
        <span className='w-full text-center'>
          No jobs matched your filters!
        </span>
      )}
      {jobs.map((job) => (
        <div
          key={job.id}
          className='md:w-[49%] w-full bg-white mb-5 rounded-lg flex items-center justify-between md:p-8 py-8 px-4 border border-gray-200'
        >
          <div className='flex flex-col items-start gap-6 md:flex-row md:items-center'>
            <img src={job.logo} alt={job.title} className='w-[70px]' />
            <div className='flex flex-col gap-[6px]'>
              <span className='font-semibold text-emerald-500 text-[22px]'>
                {job.title}
              </span>
              <div className='flex items-center gap-2'>
                <BusinessOutline width={'18px'} height={'18px'} color='#555' />
                <span className='text-[14px] font-medium text-gray-600'>
                  {job.company}
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <LocationOutline width={'18px'} height={'18px'} color='#555' />
                <span className='text-[14px] font-medium text-gray-600'>
                  {job.workStatus}
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <NewspaperOutline
                  default
                  width={'18px'}
                  height={'18px'}
                  color='#555'
                />
                <span className='text-[14px] font-medium text-gray-600'>
                  {job.contractStatus}
                </span>
              </div>
            </div>
          </div>
          <div className='flex flex-col self-end gap-4'>
            <button
              onClick={() => navigate(`/jobs/${job.id}`)}
              className='w-40 h-10 text-lg font-bold text-white rounded-md bg-emerald-500'
            >
              Apply
            </button>
            <div
              onClick={() => handleSave(job.id)}
              className={`flex items-center gap-2 cursor-pointer rounded-md justify-center py-1 border border-gray-200 ${savedJobs.some((j) => j === job.id)
                ? 'bg-emerald-100'
                : 'bg-emerald-200'
                }`}
            >
              {savedJobs.some((j) => j === job.id) ? (
                <Bookmark color={'#10b981'} />
              ) : (
                <BookmarkOutline color={'#10b981'} />
              )}
              <span className='font-semibold text-[14.5px] text-gray-600'>
                {savedJobs.some(j => j === job.id) ? 'Saved!' : 'Save'}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListedJobs;
