const API_URL = "/api/jobs";

export const addJob = async (newJob) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });

  if (!res.ok) {
    throw new Error("Failed to add job");
  }

  return res.json();
};

export const deleteJob = async (jobId) => {
  const res = await fetch(`${API_URL}/${jobId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete job");
  }
};

export const updateJob = async (job) => {
  const res = await fetch(`${API_URL}/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  if (!res.ok) {
    throw new Error("Failed to update job");
  }

  return res.json();
};
