import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";

const EditJobPage = ({ updateJob }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

  const handleSubmit = async (updatedJob) => {
    await updateJob(updatedJob);
    toast.success("Job Updated Successfully!");
    navigate(`/job/${job.id}`);
  };

  return (
    <JobForm
      initialValues={job}
      onSubmit={handleSubmit}
      formTitle="Edit Job"
      buttonText="Update Job"
    />
  );
};

export default EditJobPage;
