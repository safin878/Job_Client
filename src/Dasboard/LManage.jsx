// import React from "react";

// const LManage = () => {
//   return (
//     <div>
//       <h1>L Manage</h1>
//     </div>
//   );
// };

// export default LManage;

import Swal from "sweetalert2";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const LManage = () => {
  const axiosSecure = useAxiosSecure();

  const { data: Lessons = [], refetch } = useQuery({
    queryKey: ["Lessons"],
    queryFn: async () => {
      const response = await axiosSecure.get("/addLessons");
      return response.data;
    },
  });

  const handlUpadate = async (Lesson) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Coupon Details",
      html:
        `<input id="Lesson_Name" class="swal2-input" placeholder="Lesson Name" value="${Lesson.Lesson_Name}">` +
        `<input id="Lesson_Number" class="swal2-input" placeholder="Lesson Number" value="${Lesson.Lesson_Number}">`,
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        const EditLesson = {
          Lesson_Name: document.getElementById("Lesson_Name").value,
          Lesson_Number: document.getElementById("Lesson_Number").value,
        };

        try {
          const response = await axiosSecure.patch(
            `/addLessons/${Lesson._id}`,
            EditLesson
          );
          console.log(response);
          refetch(); // Refetch the coupons after successful update
          return true; // Proceed with the Swal action
        } catch (error) {
          console.error("Error updating Lesson:", error);
          Swal.showValidationMessage(
            "Failed to Edit Lesson. Please try again."
          );
          return false; // Prevent Swal from closing
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (formValues) {
      Swal.fire({
        title: "Lesson Edit Successful",
        icon: "success",
      });
    }
  };

  const handleDelete = async (LessonId) => {
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
          const response = await axiosSecure.delete(`/addLessons/${LessonId}`);
          Swal.fire({
            title: "Deleted!",
            text: "Your Lesson has been deleted.",
            icon: "success",
          });
          console.log(response);
          refetch(); // Refetch the coupons after successful deletion
        } catch (error) {
          console.error("Error deleting Lesson:", error);
          Swal.fire({
            title: "Error",
            text: "There was an error deleting the Lesson. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle Heading="Lesson Management"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Lesson Name</th>
              <th>Lesson Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder rows */}
            {Lessons.map((Lesson, index) => (
              <tr key={Lesson._id}>
                <th>{index + 1}</th>
                <td>{Lesson.Lesson_Name}</td>
                <td>{Lesson.Lesson_Number}</td>
                <td
                  onClick={() => handlUpadate(Lesson)}
                  className="text-2xl hover:text-blue-600 "
                >
                  <FaRegEdit />{" "}
                </td>
                <td
                  onClick={() => handleDelete(Lesson._id)}
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

export default LManage;
