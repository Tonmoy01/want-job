import { useNavigate, useParams } from "react-router-dom";
import { jobs } from "../data/jobs";
import { BusinessOutline, LocationOutline, NewspaperOutline } from "react-ionicons";

const JobDescription = () => {
  const params = useParams();
  const job = jobs[Number(params.jobId)] ? jobs[Number(params.jobId)] : jobs[0];

  const navigate = useNavigate();

  // Function to create a list from the job requirements
  const formatRequirements = (requirements) => {
    return requirements.split('•').map((item, index) => item.trim() && <li key={index} className="leading-7 text-gray-600">{item.trim()}</li>);
  };

  return (
    <div className="flex flex-col w-full gap-8 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col items-start w-full gap-5 p-6 bg-white border border-gray-200 rounded-lg shadow-sm md:p-8 lg:p-9">
        <span className="text-xl font-semibold text-emerald-500">Job Description</span>
        <p className="leading-7 text-gray-600">
          {job.description}
        </p>
        <p className="text-emerald-500 text-[15px] font-medium">What you'll do</p>
        <ul className="list-disc list-inside">{formatRequirements(job.rquirements)}</ul>
        <p className="text-emerald-500 text-[15px] font-medium">About Us</p>
        <p className="leading-7 text-gray-600">
          {job.about}
        </p>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="w-full p-3 mb-4 text-xl font-semibold text-center bg-white border border-gray-200 rounded-lg text-emerald-500">Similar Jobs</div>
      </div>
      <div className="flex flex-col items-center justify-between w-full md:flex-row md:flex-wrap">
        {jobs.slice(0, 3).map(job => (
          <div key={job.id} className="w-full md:w-[45%] lg:w-[30%] bg-white mb-5 rounded-lg flex flex-col md:flex-row items-center gap-3 justify-between p-4 md:p-6 lg:p-8 border border-gray-200">
            <div className="flex flex-col items-start w-full gap-3 md:w-auto">
              <img src={job.logo} alt={job.title} className="w-[70px]" />
              <span className="font-semibold text-emerald-500 text-[22px] w-full">{job.title}</span>
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center gap-2">
                  <BusinessOutline width={'18px'} height={'18px'} color='#555' />
                  <span className="text-[14px] font-medium text-gray-600">{job.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LocationOutline width={'18px'} height={'18px'} color='#555' />
                  <span className="text-[14px] font-medium text-gray-600">{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <NewspaperOutline width={'18px'} height={'18px'} color='#555' />
                  <span className="text-[14px] font-medium text-gray-600">{job.contractStatus}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col self-end w-full gap-4 md:w-auto">
              <button onClick={() => navigate(`/jobs/${job.id}`)} className="w-full h-10 text-lg font-bold text-white rounded-md md:w-40 bg-emerald-500">Apply Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDescription;