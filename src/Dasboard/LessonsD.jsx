import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure/useAxiosSecure";
const LessonsD = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: Lessons = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["LessonsWithCount"],
    queryFn: async () => {
      const response = await axiosSecure.get("/addLessonsWithCount");
      return response.data;
    },
  });
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
        <span className="loading loading-bars loading-lg text-blue-500"></span>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle Heading="Lessons"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Lesson Name</th>
              <th>Lesson Number</th>
              <th>Vocabulary Count</th>
            </tr>
          </thead>
          <tbody>
            {Lessons.map((Lesson, index) => (
              <tr key={Lesson._id}>
                <th>{index + 1}</th>
                <td>{Lesson.Lesson_Name}</td>
                <td>{Lesson.Lesson_Number}</td>
                <td>{Lesson.vocabularyCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LessonsD;
