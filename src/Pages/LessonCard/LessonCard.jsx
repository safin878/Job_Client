// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
// import { useState } from "react";

// const LessonCard = () => {
//   const { lessonNumber } = useParams();
//   const axiosSecure = useAxiosSecure();
//   const [page, setPage] = useState(1); // Track current page for vocabularies
//   const itemsPerPage = 1; // Show one vocabulary at a time

//   const { data: Vocabularies = [], refetch } = useQuery({
//     queryKey: ["Vocabularies", lessonNumber, page],
//     queryFn: async () => {
//       const response = await axiosSecure.get(
//         `/addVocabulary/lesson/${lessonNumber}?page=${page}&limit=${itemsPerPage}`
//       );
//       return response.data;
//     },
//   });

//   const handleNext = () => {
//     setPage(page + 1);
//   };

//   const handlePrevious = () => {
//     if (page > 1) setPage(page - 1);
//   };

//   return (
//     <div className="container mx-auto grid items-center justify-center">
//       <div className="h-[80px]"></div>
//       <div className="flex gap-2 flex-col p-4">
//         {Vocabularies.length > 0 ? (
//           Vocabularies.map((vocab) => (
//             <div
//               key={vocab._id}
//               className="card bg-base-100 shadow-xl text-neutral-content w-96"
//             >
//               <div className="card-body items-center text-center text-black">
//                 <h2 className="card-title">{vocab.Word}</h2>
//                 <p>{vocab.Pronunciation}</p>
//                 <p>{vocab.When_to_Say}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>
//             No vocabularies found for this lesson{" "}
//             <span className="text-blue-500">Go to Previous</span>.
//           </p>
//         )}
//       </div>
//       <div className="flex justify-between">
//         <button
//           onClick={handlePrevious}
//           disabled={page === 1}
//           className="btn btn-secondary"
//         >
//           Previous
//         </button>
//         <button onClick={handleNext} className="btn btn-primary">
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LessonCard;

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useState } from "react";

const LessonCard = () => {
  const { lessonNumber } = useParams();
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1); // Track current page for vocabularies
  const itemsPerPage = 1; // Show one vocabulary at a time

  const { data: Vocabularies = [], refetch } = useQuery({
    queryKey: ["Vocabularies", lessonNumber, page],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/addVocabulary/lesson/${lessonNumber}?page=${page}&limit=${itemsPerPage}`
      );
      return response.data;
    },
  });

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleCardClick = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container mx-auto grid items-center justify-center">
      <div className="h-[80px]"></div>
      <div className="flex gap-2 flex-col p-4">
        {Vocabularies.length > 0 ? (
          Vocabularies.map((vocab) => (
            <div
              key={vocab._id}
              className="card bg-base-100 shadow-xl text-neutral-content w-96"
              onClick={() => handleCardClick(vocab.Word)} // Click to hear the word
            >
              <div className="card-body items-center text-center text-black">
                <h2 className="card-title">{vocab.Word}</h2>
                <p>{vocab.Pronunciation}</p>
                <p>{vocab.When_to_Say}</p>
              </div>
            </div>
          ))
        ) : (
          <p>
            No vocabularies found for this lesson{" "}
            <span className="text-blue-500">Go to Previous</span>.
          </p>
        )}
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="btn btn-secondary"
        >
          Previous
        </button>
        <button onClick={handleNext} className="btn btn-primary">
          Next
        </button>
      </div>
    </div>
  );
};

export default LessonCard;
