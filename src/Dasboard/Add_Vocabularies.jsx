import Swal from "sweetalert2";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "./../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../Hooks/useAuth/useAuth";

const Add_Vocabularies = () => {
  const axiosSecure = useAxiosSecure();
  const { User } = useAuth();

  const handelAnnouncement = async (e) => {
    e.preventDefault();
    const announce = {
      Word: e.target.Word.value,
      Pronunciation: e.target.Pronunciation.value,
      When_to_Say: e.target.When_to_Say.value,
      Lesson_No: e.target.Lesson_No.value,
      Admin_Email: e.target.Admin_Email.value,
    };

    try {
      const res = await axiosSecure.post("/addVocabulary", announce);
      if (res.data.acknowledged) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New Vocabulary Added",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      } else {
        // Handle the case where the operation is not acknowledged
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to Add Vocabulary",
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
      <SectionTitle Heading="Add Vocabulary"></SectionTitle>

      <div className="hero   ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold mb-4"></h1>
            <form onSubmit={handelAnnouncement} className="card-body  ">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Word</span>
                  </label>
                  <input
                    type="text"
                    name="Word"
                    placeholder="Please Write a word"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pronunciation</span>
                  </label>
                  <input
                    type="text"
                    name="Pronunciation"
                    placeholder="Please Write a Pronunciation"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">When to Say</span>
                  </label>
                  <input
                    type="text"
                    name="When_to_Say"
                    placeholder="Please Write a When to Say"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Lesson No</span>
                  </label>
                  <input
                    type="text"
                    name="Lesson_No"
                    placeholder="Please Write a Lesson Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text ">Admin Email</span>
                  </label>
                  <input
                    type="text"
                    name="Admin_Email"
                    placeholder={User?.email}
                    className="input input-bordered"
                    value={User?.email}
                    disabled
                    required
                  />
                </div>
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

export default Add_Vocabularies;
