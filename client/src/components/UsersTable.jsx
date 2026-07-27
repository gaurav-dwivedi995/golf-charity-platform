import {
    deleteUser,
    makeAdmin,
    updateMembership
} from "../services/adminService";

function UsersTable({

    users,
    refreshUsers

}) {

    async function handleDelete(id) {

        if (!window.confirm("Delete this user?")) return;

        try {

            await deleteUser(id);

            alert("User Deleted Successfully");

            refreshUsers();

        } catch (err) {

            alert("Delete Failed");

        }

    }

    async function handleMakeAdmin(id) {

        try {

            await makeAdmin(id);

            alert("User is now Admin");

            refreshUsers();

        } catch (err) {

            alert("Operation Failed");

        }

    }

    async function handleMembership(id, membership) {

        try {

            await updateMembership(id, membership);

            alert("Membership Updated");

            refreshUsers();

        } catch (err) {

            alert("Update Failed");

        }

    }

    return (

        <div className="users-table">

            <h2>Registered Users</h2>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Membership</th>

                        <th>Role</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.map((user) => (

                            <tr key={user.id}>

                                <td>{user.full_name}</td>

                                <td>{user.email}</td>

                                <td>

                                    <select

                                        value={user.membership}

                                        onChange={(e) =>

                                            handleMembership(

                                                user.id,

                                                e.target.value

                                            )

                                        }

                                    >

                                        <option value="Basic">

                                            Basic

                                        </option>

                                        <option value="Premium">

                                            Premium

                                        </option>

                                    </select>

                                </td>

                                <td>{user.role}</td>

                                <td>

                                    {

                                        user.role !== "admin" && (

                                            <button

                                                onClick={() =>

                                                    handleMakeAdmin(user.id)

                                                }

                                            >

                                                Make Admin

                                            </button>

                                        )

                                    }

                                    <button

                                        onClick={() =>

                                            handleDelete(user.id)

                                        }

                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default UsersTable;