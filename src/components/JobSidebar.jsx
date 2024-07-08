import { useParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import { BusinessOutline, CashOutline, LocationOutline, NewspaperOutline } from "react-ionicons";

const JobSidebar = () => {
  const params = useParams();
  const id = Number(params.jobId) - 1;
  const job = jobs[id] ? jobs[id] : jobs[0];

  console.log(params.jobId);

  return (
    <div className="md:sticky relative md:top-10 md:w-[500px] w-full">
      <div className="flex flex-col w-full gap-4 p-5 bg-white border border-gray-200 rounded-lg">
        <span className="text-lg font-medium text-emerald-500">{job.title}</span>
        <span className="text-gray-600 font-medium text-[14px]">{job.location}</span>
        <div className="flex items-center gap-2">
          <BusinessOutline
            width={'18px'}
            height={'18px'}
            color='#555'
          />
          <span className="text-[14px] font-medium text-gray-600">{job.company}</span>
        </div>
        <div className="flex items-center gap-2">
          <LocationOutline
            width={'18px'}
            height={'18px'}
            color='#555'
          />
          <span className="text-[14px] font-medium text-gray-600">{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <NewspaperOutline
            width={'18px'}
            height={'18px'}
            color='#555'
          />
          <span className="text-[14px] font-medium text-gray-600">{job.contractStatus}</span>
        </div>
        <div className="flex items-center gap-2">
          <CashOutline
            width={'18px'}
            height={'18px'}
            color='#555'
          />
          <span className="text-[14px] font-medium text-gray-600">{job.salary}</span>
        </div>
        <button className="w-full h-10 mt-5 text-lg font-semibold text-white rounded-md bg-emerald-500">Apply Now</button>
      </div>
    </div>
  );
};
export default JobSidebar;