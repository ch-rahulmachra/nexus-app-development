// import { userApi } from "../api/axios";
// import { useState } from "react";

// export default function Admin() {
//   const [userId, setUserId] = useState("");
//   const [role, setRole] = useState("ADMIN");

//   const updateRole = async () => {
//     await userApi.put(`/users/${userId}/role`, { role });
//     alert("Role updated");
//   };

//   return (
//     <div>
//       <h2>Admin Panel</h2>

//       <input
//         placeholder="User ID"
//         onChange={e => setUserId(e.target.value)}
//       />

//       <select onChange={e => setRole(e.target.value)}>
//         <option value="ADMIN">ADMIN</option>
//         <option value="USER">USER</option>
//       </select>

//       <button onClick={updateRole}>Update Role</button>
//     </div>
//   );
// }


import { useState } from "react";

export default function Admin() {
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("ADMIN");

  const updateRole = async () => {
    await fetch(`/api/users/users/${userId}/role`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({ role })
    });

    alert("Role updated");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel</h2>

      <input
        placeholder="User ID"
        value={userId}
        onChange={e => setUserId(e.target.value)}
      />

      <select onChange={e => setRole(e.target.value)}>
        <option value="ADMIN">ADMIN</option>
        <option value="USER">USER</option>
      </select>

      <button onClick={updateRole}>Update Role</button>
    </div>
  );
}