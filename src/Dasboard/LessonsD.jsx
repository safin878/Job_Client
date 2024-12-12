import Swal from "sweetalert2";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure/useAxiosSecure";

const LessonsD = () => {
  const axiosSecure = useAxiosSecure();

  const { data: Lessons = [], refetch } = useQuery({
    queryKey: ["Lessons"],
    queryFn: async () => {
      const response = await axiosSecure.get("/addLessons");
      return response.data;
    },
  });

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
              <th>Vocabulary count</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder rows */}
            {Lessons.map((Lesson, index) => (
              <tr key={Lesson._id}>
                <th>{index + 1}</th>
                <td>{Lesson.Lesson_Name}</td>
                <td>{Lesson.Lesson_Number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LessonsD;
