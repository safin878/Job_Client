import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { Link } from "react-router";

const Lessons = () => {
  const axiosSecure = useAxiosSecure();
  const { data: Lessons = [], refetch } = useQuery({
    queryKey: ["Lessons"],
    queryFn: async () => {
      const response = await axiosSecure.get("/addLessons");
      return response.data;
    },
  });

  return (
    <div className="container mx-auto">
      <div className="h-[80px]"></div>
      <div className="grid grid-cols-2 gap-3 p-5  ">
        {Lessons.map((Lesson) => (
          <div>
            <div className="w-[500px] card card-side bg-base-100 shadow-xl hover:scale-105 transition ">
              <figure>
                <img
                  className="w-56"
                  src="https://i.postimg.cc/y83Q7xDL/Structuring-Online-ESL-Lesson-Plans-blog-image.png"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{Lesson.Lesson_Name}</h2>
                <p>Click the button to Great Experience</p>
                <Link to={`/addLessons/${Lesson.Lesson_Number}`}>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                      Lesson {Lesson.Lesson_Number}
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lessons;
