import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { API_URL as API } from "../api";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("notifications");
  const [notifications, setNotifications] = useState([]);
  const [staff, setStaff] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [examinations, setExaminations] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingNotification, setEditingNotification] = useState(null);
  const [editingStaff, setEditingStaff] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();
  const [submitMessage, setSubmitMessage] = useState({ text: "", type: "" });
  const [editMessage, setEditMessage] = useState({ text: "", type: "" });
  // popup
  const [popups, setPopups] = useState([]);
  const [popupImage, setPopupImage] = useState(null);
  const [popupTitle, setPopupTitle] = useState("");

  const authHeaders = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    setSubmitMessage({ text: "", type: "" });
    setEditMessage({ text: "", type: "" });
  }, [activeTab]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      navigate("/login");
    } else {
      fetchNotifications();
      fetchStaff();
      fetchMaterials();
      fetchExaminations();
      fetchUsers();
      fetchPopups();
    }
  }, [navigate]);

  /** ===============================
   *  FETCH FUNCTIONS
   *  =============================== */

  const fetchNotifications = async () => {
    try {
      const res = await fetch(`${API}/notifications/`);
      if (res.ok) {
        const data = await res.json();
        setNotifications(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Failed to fetch notifications", error);
    }
  };

  const fetchStaff = async () => {
    try {
      const res = await fetch(`${API}/staff/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch staff data");
      }
      const data = await res.json();
      setStaff(data);
    } catch (err) {
      console.error("Error fetching staff:", err);
      alert("Failed to load staff data. Please try again.");
    }
  };

  const fetchMaterials = async () => {
    try {
      const res = await fetch(`${API}/materials/`);
      if (res.ok) {
        const data = await res.json();
        setMaterials(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Failed to fetch materials", error);
    }
  };

  const fetchExaminations = async () => {
    try {
      const res = await fetch(`${API}/examinations/`);
      if (res.ok) {
        const data = await res.json();
        setExaminations(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error("Failed to fetch examinations", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API}/accounts/users/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const fetchPopups = async () => {
    try {
      const res = await fetch(`${API}/popups/`);
      if (res.ok) {
        const data = await res.json();
        setPopups(Array.isArray(data) ? data : []);
      }
    } catch (err) {
      console.error("Failed to fetch popups", err);
    }
  };

  /** ===============================
   *  LOGOUT
   *  =============================== */

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  /** ===============================
   *  DELETE FUNCTIONS
   *  =============================== */

  const deleteItem = async (url, fetchFunction, message) => {
    if (window.confirm(message)) {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (res.ok) {
        fetchFunction();
      } else {
        alert("Failed to delete item");
      }
    }
  };

  const handleDeleteNotification = (id) =>
    deleteItem(
      `${API}/notifications/${id}/`,
      fetchNotifications,
      "Delete this notification?"
    );

  const handleDeleteStaff = (id) =>
    deleteItem(`${API}/staff/${id}/`, fetchStaff, "Delete this staff member?");

  const handleDeleteMaterial = (id) =>
    deleteItem(
      `${API}/materials/${id}/`,
      fetchMaterials,
      "Delete this material?"
    );

  const handleDeleteExamination = (id) =>
    deleteItem(
      `${API}/examinations/${id}/`,
      fetchExaminations,
      "Delete this examination?"
    );

  const handleDeleteUser = (id) =>
    deleteItem(`${API}/accounts/users/${id}/`, fetchUsers, "Delete this user?");

  /** ===============================
   *  EDIT NOTIFICATION
   *  =============================== */

  const startEditNotification = (note) => {
    setEditingNotification({ ...note });
    setEditMessage({ text: "", type: "" });
  };

  const submitEditNotification = async (e) => {
    e.preventDefault();
    const { id, title, content, category, notification_type } =
      editingNotification;

    const res = await fetch(`${API}/notifications/${id}/`, {
      method: "PUT",
      headers: authHeaders,
      body: JSON.stringify({ title, content, category, notification_type }),
    });

    if (res.ok) {
      setEditMessage({ text: "Notification updated", type: "success" });
      setTimeout(() => {
        setEditingNotification(null);
        fetchNotifications();
      }, 1000);
    } else {
      setEditMessage({ text: "Failed to update", type: "error" });
    }
  };

  /** ===============================
   *  EDIT STAFF (FormData)
   *  =============================== */

  const startEditStaff = (member) => {
    setEditingStaff({ ...member });
  };

  const submitEditStaff = async (e) => {
    e.preventDefault();
    const { id, name, subject, qualification, category_of_post, email, phone } =
      editingStaff;

    const fd = new FormData();
    fd.append("name", name);
    fd.append("subject", subject);
    fd.append("qualification", qualification);
    fd.append("category_of_post", category_of_post);
    if (email) fd.append("email", email);
    if (phone) fd.append("phone", phone);

    const res = await fetch(`${API}/staff/${id}/`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: fd,
    });

    if (res.ok) {
      setEditMessage({ text: "Staff updated", type: "success" });
      setTimeout(() => {
        setEditingStaff(null);
        fetchStaff();
      }, 1000);
    }
  };

  /** ===============================
   *  EDIT USER
   *  =============================== */

  const startEditUser = (user) => {
    setEditingUser({ ...user, password: "" }); // password empty to avoid re-hashing or showing
    setEditMessage({ text: "", type: "" });
  };

  const submitEditUser = async (e) => {
    e.preventDefault();
    const { id, username, email, role, password } = editingUser;

    const body = { username, email, role };
    if (password) body.password = password; // Only send if updating

    const res = await fetch(`${API}/accounts/users/${id}/`, {
      method: "PUT",
      headers: authHeaders,
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setEditMessage({ text: "User updated", type: "success" });
      setTimeout(() => {
        setEditingUser(null);
        fetchUsers();
      }, 1000);
    } else {
      setEditMessage({ text: "Failed to update user", type: "error" });
    }
  };

  /** ===============================
   *  RENDER
   *  =============================== */

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* SIDE NAV */}
        <div className="w-full md:w-64 bg-white shadow-md rounded-lg h-fit">
          <nav className="flex flex-col p-4 space-y-2">
            {[
              "notifications",
              "staff",
              "materials",
              "examinations",
              "users",
              "popups",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-4 py-2 rounded ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                Manage {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* MAIN PANEL */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          {/* =======================
              TAB: NOTIFICATIONS
          ======================= */}
          {activeTab === "notifications" && (
            <>
              <h2 className="text-xl font-bold mb-4">Post New Notification</h2>

              <form
                className="space-y-4 mb-8 border-b pb-8"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target);
                  const data = {
                    title: fd.get("title"),
                    content: fd.get("content"),
                    category: fd.get("category"),
                    notification_type: fd.get("type"),
                  };

                  const res = await fetch(`${API}/notifications/`, {
                    method: "POST",
                    headers: authHeaders,
                    body: JSON.stringify(data),
                  });

                  if (res.ok) {
                    setSubmitMessage({
                      text: "Notification posted!",
                      type: "success",
                    });
                    e.target.reset();
                    fetchNotifications();
                  } else {
                    setSubmitMessage({
                      text: "Failed to post notification",
                      type: "error",
                    });
                  }
                }}
              >
                <div>
                  <label>Title</label>
                  <input
                    name="title"
                    className="block w-full border p-2"
                    required
                  />
                </div>

                <div>
                  <label>Content</label>
                  <textarea
                    name="content"
                    className="block w-full border p-2"
                    rows="4"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <select name="category" className="border p-2">
                    <option value="general">General</option>
                    <option value="inter">Inter</option>
                    <option value="degree">Degree</option>
                  </select>

                  <select name="type" className="border p-2">
                    <option value="general">General</option>
                    <option value="exam">Exam</option>
                    <option value="admission">Admission</option>
                  </select>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Post
                </button>

                {submitMessage.text && (
                  <p
                    className={`text-sm mt-2 ${
                      submitMessage.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitMessage.text}
                  </p>
                )}
              </form>

              {/* Existing notifications */}
              <h3 className="text-lg font-bold mb-4">Existing Notifications</h3>

              {Array.isArray(notifications) &&
                notifications.map((note) => (
                  <div
                    key={note.id}
                    className="border p-4 rounded flex justify-between mb-2"
                  >
                    <div>
                      <h4 className="font-bold">{note.title}</h4>
                      <p className="text-sm">{note.content}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteNotification(note.id)}
                      className="text-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </>
          )}

          {/* =======================
              TAB: STAFF
          ======================= */}
          {activeTab === "staff" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Add Staff</h2>

              <form
                className="space-y-4 mb-8 border-b pb-8"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target);

                  const res = await fetch(`${API}/staff/`, {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                      )}`,
                    },
                    body: fd,
                  });

                  if (res.ok) {
                    setSubmitMessage({
                      text: "Staff added!",
                      type: "success",
                    });
                    e.target.reset();
                    fetchStaff();
                  }
                }}
              >
                <input
                  name="name"
                  placeholder="Name"
                  required
                  className="block w-full border p-2"
                />

                <input
                  name="subject"
                  placeholder="Subject"
                  required
                  className="block w-full border p-2"
                />

                <input
                  name="qualification"
                  placeholder="Qualification"
                  required
                  className="block w-full border p-2"
                />

                <select
                  name="category_of_post"
                  className="block w-full border p-2"
                >
                  <option value="Teaching Staff">Teaching</option>
                  <option value="Non-Teaching Staff">Non-Teaching</option>
                  <option value="Principal">Principal</option>
                </select>

                <input
                  name="email"
                  placeholder="Email"
                  className="block w-full border p-2"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  className="block w-full border p-2"
                />

                <div className="border p-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Staff Image
                  </label>
                  <input
                    name="image"
                    type="file"
                    accept="image/*"
                    className="block w-full"
                  />
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Add Staff
                </button>
              </form>

              {staff.map((member) => (
                <div
                  key={member.id}
                  className="border p-4 rounded flex justify-between mb-2"
                >
                  <div>
                    <h4 className="font-bold">{member.name}</h4>
                    <p className="text-sm text-gray-500">
                      {member.subject} — {member.category_of_post}
                    </p>
                  </div>

                  <button
                    onClick={() => handleDeleteStaff(member.id)}
                    className="text-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* =======================
              TAB: MATERIALS
          ======================= */}
          {activeTab === "materials" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Upload Material</h2>

              <form
                className="space-y-4 mb-8 border-b pb-8"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target);

                  const res = await fetch(`${API}/materials/`, {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                      )}`,
                    },
                    body: fd,
                  });

                  if (res.ok) {
                    setSubmitMessage({
                      text: "Material uploaded!",
                      type: "success",
                    });
                    e.target.reset();
                    fetchMaterials();
                  }
                }}
              >
                <input
                  name="title"
                  placeholder="Title"
                  required
                  className="block w-full border p-2"
                />

                <input
                  name="file"
                  type="file"
                  required
                  className="block w-full border p-2"
                />

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Upload
                </button>
              </form>

              {Array.isArray(materials) &&
                materials.map((mat) => (
                  <div
                    key={mat.id}
                    className="border p-4 rounded flex justify-between mb-2"
                  >
                    <a
                      href={mat.file}
                      target="_blank"
                      className="text-blue-600"
                    >
                      {mat.title}
                    </a>

                    <button
                      onClick={() => handleDeleteMaterial(mat.id)}
                      className="text-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          )}

          {/* =======================
              TAB: EXAMINATIONS
          ======================= */}
          {activeTab === "examinations" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Post Examination</h2>

              <form
                className="space-y-4 mb-8 border-b pb-8"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target);

                  const res = await fetch(`${API}/examinations/`, {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                      )}`,
                    },
                    body: fd,
                  });

                  if (res.ok) {
                    setSubmitMessage({
                      text: "Examination posted!",
                      type: "success",
                    });
                    e.target.reset();
                    fetchExaminations();
                  }
                }}
              >
                <input
                  name="title"
                  placeholder="Title"
                  className="block w-full border p-2"
                  required
                />

                <select name="category" className="block w-full border p-2">
                  <option value="inter">Inter</option>
                  <option value="degree">Degree</option>
                </select>

                <input
                  name="date"
                  type="date"
                  className="block w-full border p-2"
                />

                <input
                  name="file"
                  type="file"
                  className="block w-full border p-2"
                  required
                />

                <textarea
                  name="description"
                  className="block w-full border p-2"
                  rows="3"
                ></textarea>

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Post
                </button>
              </form>

              {Array.isArray(examinations) &&
                examinations.map((exam) => (
                  <div
                    key={exam.id}
                    className="border p-4 rounded flex justify-between mb-2"
                  >
                    <div>
                      <h4 className="font-bold">{exam.title}</h4>
                      <p className="text-sm">{exam.category.toUpperCase()}</p>
                      <a
                        href={exam.file}
                        target="_blank"
                        className="text-blue-600"
                      >
                        View
                      </a>
                    </div>

                    <button
                      onClick={() => handleDeleteExamination(exam.id)}
                      className="text-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
            </div>
          )}

          {/* =======================
              TAB: ACCOUNTS
          ======================= */}
          {/* =======================
              TAB: USERS
          ======================= */}
          {activeTab === "users" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Manage Users</h2>

              {/* EDIT FORM or CREATE FORM */}
              {editingUser ? (
                <div className="mb-8 border-b pb-8 bg-gray-50 p-4 rounded">
                  <h3 className="text-lg font-bold mb-4">Edit User</h3>
                  <form onSubmit={submitEditUser} className="space-y-4">
                    <input
                      name="username"
                      value={editingUser.username}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          username: e.target.value,
                        })
                      }
                      placeholder="Username"
                      className="block w-full border p-2"
                      required
                    />
                    <input
                      name="email"
                      type="email"
                      value={editingUser.email}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          email: e.target.value,
                        })
                      }
                      placeholder="Email"
                      className="block w-full border p-2"
                      required
                    />
                    <input
                      name="password"
                      type="password"
                      value={editingUser.password}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          password: e.target.value,
                        })
                      }
                      placeholder="New Password (leave blank to keep current)"
                      className="block w-full border p-2"
                    />
                    <select
                      name="role"
                      value={editingUser.role || "student"}
                      onChange={(e) =>
                        setEditingUser({
                          ...editingUser,
                          role: e.target.value,
                        })
                      }
                      className="block w-full border p-2"
                    >
                      <option value="admin">Admin</option>
                      <option value="staff">Staff</option>
                      <option value="student">Student</option>
                    </select>

                    <div className="flex gap-2">
                      <button className="bg-green-600 text-white px-4 py-2 rounded">
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingUser(null)}
                        className="bg-gray-400 text-white px-4 py-2 rounded"
                      >
                        Cancel
                      </button>
                    </div>

                    {editMessage.text && (
                      <p
                        className={`text-sm mt-2 ${
                          editMessage.type === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {editMessage.text}
                      </p>
                    )}
                  </form>
                </div>
              ) : (
                <form
                  className="space-y-4 mb-8 border-b pb-8"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const fd = new FormData(e.target);
                    const data = Object.fromEntries(fd.entries());

                    const res = await fetch(`${API}/accounts/users/`, {
                      method: "POST",
                      headers: authHeaders,
                      body: JSON.stringify(data),
                    });

                    if (res.ok) {
                      setSubmitMessage({
                        text: "User created!",
                        type: "success",
                      });
                      e.target.reset();
                      fetchUsers();
                    } else {
                      const error = await res.json();
                      setSubmitMessage({
                        text: error.detail || "Failed to create user",
                        type: "error",
                      });
                    }
                  }}
                >
                  <input
                    name="username"
                    placeholder="Username"
                    className="block w-full border p-2"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="block w-full border p-2"
                    required
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="block w-full border p-2"
                    required
                  />
                  <select name="role" className="block w-full border p-2">
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                    <option value="student">Student</option>
                  </select>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Create User
                  </button>

                  {submitMessage.text && (
                    <p
                      className={`text-sm mt-2 ${
                        submitMessage.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {submitMessage.text}
                    </p>
                  )}
                </form>
              )}

              {Array.isArray(users) &&
                users.map((u) => (
                  <div
                    key={u.id}
                    className="border p-4 rounded flex justify-between mb-2 items-center"
                  >
                    <div>
                      <h4 className="font-bold">{u.username}</h4>
                      <p className="text-sm text-gray-600">{u.email}</p>
                      <p className="text-xs text-gray-500 capitalize">
                        {u.role || "User"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => startEditUser(u)}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(u.id)}
                        className="text-red-600 text-sm hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* =======================
    TAB: POPUPS
======================= */}
          {activeTab === "popups" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Manage Popup Images</h2>

              {/* CREATE POPUP */}
              <form
                className="space-y-4 mb-8 border-b pb-8"
                onSubmit={async (e) => {
                  e.preventDefault();

                  const fd = new FormData();
                  fd.append("title", popupTitle);
                  fd.append("image", popupImage);
                  fd.append("active", true);

                  const res = await fetch(`${API}/popups/`, {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                      )}`,
                    },
                    body: fd,
                  });

                  if (res.ok) {
                    setSubmitMessage({
                      text: "Popup uploaded successfully!",
                      type: "success",
                    });
                    setPopupTitle("");
                    setPopupImage(null);
                    fetchPopups();
                  } else {
                    setSubmitMessage({
                      text: "Failed to upload popup",
                      type: "error",
                    });
                  }
                }}
              >
                <input
                  type="text"
                  placeholder="Popup title (optional)"
                  value={popupTitle}
                  onChange={(e) => setPopupTitle(e.target.value)}
                  className="block w-full border p-2"
                />

                <input
                  type="file"
                  accept="image/*"
                  required
                  onChange={(e) => setPopupImage(e.target.files[0])}
                  className="block w-full border p-2"
                />

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Upload Popup
                </button>

                {submitMessage.text && (
                  <p
                    className={`text-sm mt-2 ${
                      submitMessage.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitMessage.text}
                  </p>
                )}
              </form>

              {/* EXISTING POPUPS */}
              <h3 className="text-lg font-bold mb-4">Existing Popups</h3>

              {popups.map((popup) => (
                <div
                  key={popup.id}
                  className="border p-4 rounded flex justify-between items-center mb-3"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={popup.image}
                      alt="popup"
                      className="w-24 h-16 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">
                        {popup.title || "No title"}
                      </p>
                      <p className="text-sm text-gray-500">
                        Status:{" "}
                        <span
                          className={
                            popup.active ? "text-green-600" : "text-gray-500"
                          }
                        >
                          {popup.active ? "Active" : "Inactive"}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {/* TOGGLE ACTIVE */}
                    <button
                      onClick={async () => {
                        await fetch(`${API}/popups/${popup.id}/`, {
                          method: "PATCH",
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem(
                              "access_token"
                            )}`,
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({ active: !popup.active }),
                        });
                        fetchPopups();
                      }}
                      className={`px-3 py-1 rounded text-white ${
                        popup.active ? "bg-gray-500" : "bg-green-600"
                      }`}
                    >
                      {popup.active ? "Deactivate" : "Activate"}
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={async () => {
                        if (window.confirm("Delete this popup?")) {
                          await fetch(`${API}/popups/${popup.id}/`, {
                            method: "DELETE",
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem(
                                "access_token"
                              )}`,
                            },
                          });
                          fetchPopups();
                        }
                      }}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
