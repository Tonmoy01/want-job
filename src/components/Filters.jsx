import { useCallback, useEffect, useState } from 'react';
import { BusinessOutline, CloseCircleOutline } from 'react-ionicons';
import { useNavigate } from 'react-router-dom';
import { jobs } from '../data/jobs';

const Filters = ({ onFilterChange, savedJobs }) => {
  const [contract, setContract] = useState([]);
  const [work, setWork] = useState([]);

  const navigate = useNavigate();

  const memoFilterChange = useCallback(onFilterChange, []);

  useEffect(() => {
    memoFilterChange({ contractStatus: contract, workStatus: work });
  }, [contract, work, memoFilterChange]);

  const handleCloseFilter = () => {
    setContract([]);
    setWork([]);
  };

  const handleContractStatusChange = (e) => {
    const isChecked = e.target.checked;
    const filterValue = e.target.value;

    setContract((prev) => {
      if (isChecked) {
        return [...prev, filterValue];
      } else {
        return prev.filter((status) => status !== filterValue);
      }
    });
  };

  const handleLocationStatusChange = (e) => {
    const isChecked = e.target.checked;
    const filterValue = e.target.value;

    setWork((prev) => {
      if (isChecked) {
        return [...prev, filterValue];
      } else {
        return prev.filter((status) => status !== filterValue);
      }
    });
  };

  return (
    <div className='md:sticky relative md:top-10 md:w-[500px] w-full'>
      <div className='w-full p-5 bg-white border border-gray-200 rounded-lg'>
        <div className='flex items-center justify-between w-full'>
          <span className='text-gray-800 font-semibold text-[15px]'>
            Filter Jobs
          </span>
          <CloseCircleOutline
            cssClasses={'cursor-pointer'}
            color='#ed5a85'
            onClick={handleCloseFilter}
          />
        </div>

        <div className='flex flex-row justify-between w-full gap-4 mt-5 md:flex-col'>
          <div className='flex flex-col gap-4'>
            <span className='text-gray-800 font-semibold text-[15.5px]'>
              Contract Status
            </span>
            <div className='flex flex-col w-full gap-2'>
              <div className='flex items-center w-full gap-2'>
                <input
                  type='checkbox'
                  value='Full Time'
                  checked={contract.some((c) => c === 'Full Time')}
                  onChange={handleContractStatusChange}
                  className='w-[16px] h-[16px]'
                />
                <span className='text-gray-800 font-medium text-[15px]'>
                  Full Time
                </span>
              </div>
              <div className='flex items-center w-full gap-2'>
                <input
                  type='checkbox'
                  value='Part Time'
                  checked={contract.some((c) => c === 'Part Time')}
                  onChange={handleContractStatusChange}
                  className='w-[16px] h-[16px]'
                />
                <span className='text-gray-800 font-medium text-[15px]'>
                  Part Time
                </span>
              </div>
              <div className='flex items-center w-full gap-2'>
                <input
                  type='checkbox'
                  value='Internship'
                  checked={contract.some((c) => c === 'Internship')}
                  onChange={handleContractStatusChange}
                  className='w-[16px] h-[16px]'
                />
                <span className='text-gray-800 font-medium text-[15px]'>
                  Internship
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <span className='text-gray-800 font-semibold text-[15.5px]'>
              Location Status
            </span>
            <div className='flex flex-col w-full gap-2'>
              <div className='flex items-center w-full gap-2'>
                <input
                  type='checkbox'
                  value='On-Site'
                  checked={work.some((c) => c === 'On-Site')}
                  onChange={handleLocationStatusChange}
                  className='w-[16px] h-[16px]'
                />
                <span className='text-gray-800 font-medium text-[15px]'>
                  On-Site
                </span>
              </div>
              <div className='flex items-center w-full gap-2'>
                <input
                  type='checkbox'
                  value='Remote'
                  checked={work.some((c) => c === 'Remote')}
                  onChange={handleLocationStatusChange}
                  className='w-[16px] h-[16px]'
                />
                <span className='text-gray-800 font-medium text-[15px]'>
                  Remote
                </span>
              </div>
              <div className='flex items-center w-full gap-2'>
                <input
                  type='checkbox'
                  value='Hybrid'
                  checked={work.some((c) => c === 'Hybrid')}
                  onChange={handleLocationStatusChange}
                  className='w-[16px] h-[16px]'
                />
                <span className='text-gray-800 font-medium text-[15px]'>
                  Hybrid
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full p-5 mt-5 bg-white border border-gray-200 rounded-lg'>
        <div className='flex flex-col w-full gap-2'>
          <span className='text-gray-800 font-semibold text-[15px]'>
            Saved Jobs
          </span>
          <div className='flex flex-col w-full gap-5'>
            {!savedJobs.length && (
              <span className='text-gray-400 text-[14px]'>
                You don't have any saved jobs yet!
              </span>
            )}

            {savedJobs?.map((job) => {
              const j = jobs.find((j) => j.id === job);

              if (j) {
                return (
                  <div
                    key={job.id}
                    className='flex items-center justify-between w-full pb-3 text-gray-800 border-b border-gray-300'
                  >
                    <div className='flex flex-col items-start gap-1'>
                      <span>{j.title}</span>
                      <div className='flex items-center gap-2'>
                        <BusinessOutline
                          width={'18px'}
                          height={'18px'}
                          color='#555'
                        />
                        <span className='text-[14px] text-gray-600'>
                          {j.company}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/jobs/${j.id}`)}
                      className='text-white font-semibold text-[15px] rounded bg-emerald-500 w-20 h-8'
                    >
                      Apply
                    </button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filters;
