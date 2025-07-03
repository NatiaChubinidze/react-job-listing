import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";

const AddJobPage = ({ addJobSubmit }) => {
  const navigate = useNavigate();

  const handleSubmit = async (job) => {
    await addJobSubmit(job);
    toast.success("Job Added Successfully!");
    navigate("/jobs");
  };

  return (
    <JobForm
      initialValues={{}}
      onSubmit={handleSubmit}
      formTitle="Add Job"
      buttonText="Add Job"
    />
  );
};

export default AddJobPage;
