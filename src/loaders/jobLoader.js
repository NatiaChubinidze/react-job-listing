export const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);

  if (!res.ok) {
    throw new Error("Failed to load job");
  }

  return await res.json();
};
