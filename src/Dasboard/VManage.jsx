// import Swal from "sweetalert2";
// import SectionTitle from "../Components/SectionTitle/SectionTitle";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../Hooks/useAxiosSecure/useAxiosSecure";
// import { FaRegEdit } from "react-icons/fa";
// import { MdDeleteOutline } from "react-icons/md";

// const VManage = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: Vocabularies = [], refetch } = useQuery({
//     queryKey: ["Vocabularies"],
//     queryFn: async () => {
//       const response = await axiosSecure.get("/addVocabulary");
//       return response.data;
//     },
//   });

//   const handlUpadate = async (Vocabulary) => {
//     const { value: formValues } = await Swal.fire({
//       title: "Update Vocabulary Details",
//       html:
//         `<input id="Word" class="swal2-input" placeholder="Lesson Name" value="${Vocabulary.Word}">` +
//         `<input id="Meaning" class="swal2-input" placeholder="Lesson Name" value="${Vocabulary.Meaning}">` +
//         `<input id="Pronunciation" class="swal2-input" placeholder="Lesson Name" value="${Vocabulary.Pronunciation}">` +
//         `<input id="When_to_Say" class="swal2-input" placeholder="Lesson Name" value="${Vocabulary.When_to_Say}">` +
//         `<input id="Lesson_No" class="swal2-input" placeholder="Lesson Number" value="${Vocabulary.Lesson_No}">`,
//       showCancelButton: true,
//       confirmButtonText: "Submit",
//       showLoaderOnConfirm: true,
//       preConfirm: async () => {
//         const EditLesson = {
//           Word: document.getElementById("Word").value,
//           Meaning: document.getElementById("Meaning").value,
//           Pronunciation: document.getElementById("Pronunciation").value,
//           When_to_Say: document.getElementById("When_to_Say").value,
//           Lesson_No: document.getElementById("Lesson_No").value,
//         };

//         try {
//           const response = await axiosSecure.patch(
//             `/addVocabulary/${Vocabulary._id}`,
//             EditLesson
//           );
//           console.log(response);
//           refetch(); // Refetch the coupons after successful update
//           return true; // Proceed with the Swal action
//         } catch (error) {
//           console.error("Error updating Lesson:", error);
//           Swal.showValidationMessage(
//             "Failed to Edit Lesson. Please try again."
//           );
//           return false; // Prevent Swal from closing
//         }
//       },
//       allowOutsideClick: () => !Swal.isLoading(),
//     });

//     if (formValues) {
//       Swal.fire({
//         title: "Lesson Edit Successful",
//         icon: "success",
//       });
//     }
//   };

//   const handleDelete = async (VocabularyId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const response = await axiosSecure.delete(
//             `/addVocabulary/${VocabularyId}`
//           );
//           Swal.fire({
//             title: "Deleted!",
//             text: "Your Vocabulary has been deleted.",
//             icon: "success",
//           });
//           console.log(response);
//           refetch(); // Refetch the coupons after successful deletion
//         } catch (error) {
//           console.error("Error deleting Vocabulary:", error);
//           Swal.fire({
//             title: "Error",
//             text: "There was an error deleting the Vocabulary. Please try again.",
//             icon: "error",
//           });
//         }
//       }
//     });
//   };

//   return (
//     <div>
//       <SectionTitle Heading="Vocabulary Management"></SectionTitle>
//       <div className="overflow-x-auto">
//         <table className="table">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Word</th>
//               <th>Meaning</th>
//               <th>Pronunciation</th>
//               <th>When to Say</th>
//               <th>Lesson No</th>
//               <th>Admin Email</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Placeholder rows */}
//             {Vocabularies.map((Vocabulary, index) => (
//               <tr key={Vocabulary._id}>
//                 <th>{index + 1}</th>
//                 <td>{Vocabulary.Word}</td>
//                 <td>{Vocabulary.Meaning}</td>
//                 <td>{Vocabulary.Pronunciation}</td>
//                 <td>{Vocabulary.When_to_Say}</td>
//                 <td>{Vocabulary.Lesson_No}</td>
//                 <td>{Vocabulary.Admin_Email}</td>
//                 <td
//                   onClick={() => handlUpadate(Vocabulary)}
//                   className="text-2xl hover:text-blue-600 "
//                 >
//                   <FaRegEdit />{" "}
//                 </td>
//                 <td
//                   onClick={() => handleDelete(Vocabulary._id)}
//                   className="text-2xl hover:text-red-700"
//                 >
//                   <MdDeleteOutline />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default VManage;
import Swal from "sweetalert2";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";

const VManage = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedLesson, setSelectedLesson] = useState(""); // State for filtering

  const { data: Vocabularies = [], refetch } = useQuery({
    queryKey: ["Vocabularies"],
    queryFn: async () => {
      const response = await axiosSecure.get("/addVocabulary");
      return response.data;
    },
  });

  const handleFilterChange = (e) => {
    setSelectedLesson(e.target.value); // Update selected lesson
  };

  const filteredVocabularies = selectedLesson
    ? Vocabularies.filter((vocab) => vocab.Lesson_No === selectedLesson)
    : Vocabularies;

  const handlUpadate = async (Vocabulary) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Vocabulary Details",
      html:
        `<input id="Word" class="swal2-input" placeholder="Word" value="${Vocabulary.Word}">` +
        `<input id="Meaning" class="swal2-input" placeholder="Meaning" value="${Vocabulary.Meaning}">` +
        `<input id="Pronunciation" class="swal2-input" placeholder="Pronunciation" value="${Vocabulary.Pronunciation}">` +
        `<input id="When_to_Say" class="swal2-input" placeholder="When to Say" value="${Vocabulary.When_to_Say}">` +
        `<input id="Lesson_No" class="swal2-input" placeholder="Lesson Number" value="${Vocabulary.Lesson_No}">`,
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        const EditLesson = {
          Word: document.getElementById("Word").value,
          Meaning: document.getElementById("Meaning").value,
          Pronunciation: document.getElementById("Pronunciation").value,
          When_to_Say: document.getElementById("When_to_Say").value,
          Lesson_No: document.getElementById("Lesson_No").value,
        };

        try {
          const response = await axiosSecure.patch(
            `/addVocabulary/${Vocabulary._id}`,
            EditLesson
          );
          console.log(response);
          refetch();
          return true;
        } catch (error) {
          console.error("Error updating Vocabulary:", error);
          Swal.showValidationMessage(
            "Failed to Edit Vocabulary. Please try again."
          );
          return false;
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (formValues) {
      Swal.fire({
        title: "Vocabulary Edit Successful",
        icon: "success",
      });
    }
  };

  const handleDelete = async (VocabularyId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(
            `/addVocabulary/${VocabularyId}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your Vocabulary has been deleted.",
            icon: "success",
          });
          console.log(response);
          refetch();
        } catch (error) {
          console.error("Error deleting Vocabulary:", error);
          Swal.fire({
            title: "Error",
            text: "There was an error deleting the Vocabulary. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle Heading="Vocabulary Management"></SectionTitle>

      {/* Filter by Lesson_No */}
      <div className="flex justify-center my-4">
        {/* Centering the filter dropdown */}
        <div>
          <label
            htmlFor="lessonFilter"
            className="block text-lg font-medium text-center"
          >
            Filter by Lesson Number:
          </label>
          <select
            id="lessonFilter"
            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm"
            value={selectedLesson}
            onChange={handleFilterChange}
          >
            <option value="">All Lessons</option>
            {[...new Set(Vocabularies.map((vocab) => vocab.Lesson_No))].map(
              (lessonNo) => (
                <option key={lessonNo} value={lessonNo}>
                  Lesson {lessonNo}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Word</th>
              <th>Meaning</th>
              <th>Pronunciation</th>
              <th>When to Say</th>
              <th>Lesson No</th>
              <th>Admin Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredVocabularies.map((Vocabulary, index) => (
              <tr key={Vocabulary._id}>
                <th>{index + 1}</th>
                <td>{Vocabulary.Word}</td>
                <td>{Vocabulary.Meaning}</td>
                <td>{Vocabulary.Pronunciation}</td>
                <td>{Vocabulary.When_to_Say}</td>
                <td>{Vocabulary.Lesson_No}</td>
                <td>{Vocabulary.Admin_Email}</td>
                <td
                  onClick={() => handlUpadate(Vocabulary)}
                  className="text-2xl hover:text-blue-600"
                >
                  <FaRegEdit />
                </td>
                <td
                  onClick={() => handleDelete(Vocabulary._id)}
                  className="text-2xl hover:text-red-700"
                >
                  <MdDeleteOutline />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VManage;
