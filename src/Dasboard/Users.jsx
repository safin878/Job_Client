import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SectionTitle from "../Components/SectionTitle/SectionTitle";
import useAxiosSecure from "../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosSecure.get("/users");
      return response.data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async ({ email, role }) => {
      const { data } = await axiosSecure.patch(`/users/update/${email}`, {
        role,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const handleRoleChange = async (email, role) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Change role to ${role}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await mutateAsync({ email, role });
          Swal.fire({
            title: "Success!",
            text: `Role updated to ${role}.`,
            icon: "success",
          });
        } catch (error) {
          console.error("Failed to update role", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to update the role.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle Heading="Manage Users"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    className="select select-bordered"
                    value={user.role}
                    onChange={(e) =>
                      handleRoleChange(user.email, e.target.value)
                    }
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
