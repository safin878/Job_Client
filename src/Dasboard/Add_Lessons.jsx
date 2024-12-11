import Swal from "sweetalert2";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "./../Hooks/useAxiosSecure/useAxiosSecure";

const Add_Lessons = () => {
  const axiosSecure = useAxiosSecure();

  // const handelAnnouncement = async (e) => {
  //   e.preventDefault();
  //   const announce = {
  //     title: e.target.title.value,
  //     description: e.target.description.value,
  //   };
  //   const res = await axiosSecure.post("/addLessons", announce);
  //   if (res.data.acknowledged) {
  //     Swal.fire({
  //       position: "center",
  //       icon: "success",
  //       title: "New Lesson Added",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     e.target.reset();
  //   }
  // };

  const handelAnnouncement = async (e) => {
    e.preventDefault();
    const announce = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    try {
      const res = await axiosSecure.post("/addLessons", announce);
      if (res.data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New Lesson Added",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      } else {
        // Handle the case where the operation is not acknowledged
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to Add Lesson",
          text: "Please try again later.",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      // Handle unexpected errors during the API call
      Swal.fire({
        position: "center",
        icon: "error",
        title: "An Error Occurred",
        text: "Something went wrong. Please try again later.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div>
      <SectionTitle Heading="Add Lesson"></SectionTitle>

      <div className="hero   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold mb-4"></h1>
            <form onSubmit={handelAnnouncement} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lesson Name</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Lesson Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lesson Number</span>
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Lesson Number"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-black bg-opacity-80 text-white hover:bg-black ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_Lessons;
