// import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

// const LessonCard = () => {
//     const axiosSecure = useAxiosSecure();
//     const { data: Vocabularies = [], refetch } = useQuery({
//         queryKey: ["Vocabularies"],
//         queryFn: async () => {
//           const response = await axiosSecure.get("/addVocabulary");
//           return response.data;
//         },
//       });

//   return (
//     <div className="container mx-auto grid items-center justify-center">
//       <div className="h-[80px]"></div>
//       <div className="card bg-base-100 shadow-xl text-neutral-content w-96">
//         <div className="card-body items-center text-center text-black">
//           <h2 className="card-title">ありがとう</h2>
//           <p>Thank You</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LessonCard;

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const LessonCard = () => {
  const { lessonNumber } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: Vocabularies = [], refetch } = useQuery({
    queryKey: ["Vocabularies", lessonNumber],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/addVocabulary/lesson/${lessonNumber}`
      );
      return response.data;
    },
  });
  console.log(Vocabularies);
  console.log("Lesson Number: ", lessonNumber);

  return (
    <div className="container mx-auto grid items-center justify-center">
      <div className="h-[80px]"></div>
      {Vocabularies.length > 0 ? (
        Vocabularies.map((vocab) => (
          <div
            key={vocab._id}
            className="card bg-base-100 shadow-xl text-neutral-content w-96"
          >
            <div className="card-body items-center text-center text-black">
              <h2 className="card-title">{vocab.Word}</h2>
              <p>{vocab.Meaning}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No vocabularies found for this lesson.</p>
      )}
    </div>
  );
};

export default LessonCard;
