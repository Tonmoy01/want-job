import JobDescription from "../../components/JobDescription";
import JobSidebar from "../../components/JobSidebar";

const SingleJob = () => {
  return (
    <div className="w-full mb-16 mt-28">
      <div className="relative flex flex-col items-start w-full px-5 md:flex-row md:px-16 gap-9">
        <JobSidebar />
        <div className="w-full">
          <JobDescription />
        </div>
      </div>
    </div>
  );
};
export default SingleJob;