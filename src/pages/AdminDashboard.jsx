import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("notifications");
  const [notifications, setNotifications] = useState([]);
  const [staff, setStaff] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [examinations, setExaminations] = useState([]);
  const [editingNotification, setEditingNotification] = useState(null);
  const [editingStaff, setEditingStaff] = useState(null);
  const navigate = useNavigate();
  const [submitMessage, setSubmitMessage] = useState({ text: "", type: "" });
  const [editMessage, setEditMessage] = useState({ text: "", type: "" });

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
    }
  }, [navigate]);

  const authHeaders = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    "Content-Type": "application/json",
  };

  const fetchNotifications = async () => {
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
        }/api/notifications/`
      );
      const data = await res.json();
      setNotifications(data);
    } catch (err) {
      console.error("Error fetching notifications:", err);
    }
  };

  const fetchStaff = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"}/api/staff/`
      );
      const data = await res.json();
      setStaff(data);
    } catch (err) {
      console.error("Error fetching staff:", err);
    }
  };

  const fetchMaterials = async () => {
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
        }/api/materials/`
      );
      const data = await res.json();
      setMaterials(data);
    } catch (err) {
      console.error("Error fetching materials:", err);
    }
  };

  const fetchExaminations = async () => {
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
        }/api/examinations/`
      );
      const data = await res.json();
      setExaminations(data);
    } catch (err) {
      console.error("Error fetching examinations:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  const handleDeleteNotification = async (id) => {
    if (window.confirm("Are you sure you want to delete this notification?")) {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
          }/api/notifications/${id}/`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        if (res.ok) {
          alert("Notification deleted successfully");
          fetchNotifications();
        } else {
          const errorText = await res.text();
          alert(
            `Failed to delete notification: ${res.status} ${res.statusText}\n${errorText}`
          );
        }
      } catch (err) {
        console.error("Error deleting notification:", err);
      }
    }
  };

  const handleDeleteStaff = async (id) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
          }/api/staff/${id}/`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        if (res.ok) {
          alert("Staff member deleted successfully");
          fetchStaff();
        } else {
          const errorText = await res.text();
          alert(
            `Failed to delete staff member: ${res.status} ${res.statusText}\n${errorText}`
          );
        }
      } catch (err) {
        console.error("Error deleting staff:", err);
      }
    }
  };

  const handleDeleteMaterial = async (id) => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
          }/api/materials/${id}/`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        if (res.ok) {
          alert("Material deleted successfully");
          fetchMaterials();
        } else {
          const errorText = await res.text();
          alert(
            `Failed to delete material: ${res.status} ${res.statusText}\n${errorText}`
          );
        }
      } catch (err) {
        console.error("Error deleting material:", err);
      }
    }
  };

  const startEditNotification = (note) => {
    setEditingNotification({ ...note });
    setEditMessage({ text: "", type: "" });
  };

  const submitEditNotification = async (e) => {
    e.preventDefault();
    const { id, title, content, category, notification_type } =
      editingNotification;
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
        }/api/notifications/${id}/`,
        {
          method: "PUT",
          headers: authHeaders,
          body: JSON.stringify({ title, content, category, notification_type }),
        }
      );
      if (res.ok) {
        setEditMessage({ text: "Notification updated", type: "success" });
        setTimeout(() => {
          setEditingNotification(null);
          fetchNotifications();
        }, 1500);
      } else {
        setEditMessage({
          text: "Failed to update notification",
          type: "error",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const startEditStaff = (member) => {
    setEditingStaff({ ...member });
    setEditMessage({ text: "", type: "" });
  };

  const submitEditStaff = async (e) => {
    e.preventDefault();
    const { id, name, subject, qualification, category_of_post, email, phone } =
      editingStaff;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("subject", subject);
    formData.append("qualification", qualification);
    formData.append("category_of_post", category_of_post);
    if (email) formData.append("email", email);
    if (phone) formData.append("phone", phone);
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
        }/api/staff/${id}/`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: formData,
        }
      );
      if (res.ok) {
        setEditMessage({ text: "Staff updated", type: "success" });
        setTimeout(() => {
          setEditingStaff(null);
          fetchStaff();
        }, 1500);
      } else {
        setEditMessage({ text: "Failed to update staff", type: "error" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-md rounded-lg h-fit">
          <nav className="flex flex-col p-4 space-y-2">
            <button
              onClick={() => setActiveTab("notifications")}
              className={`text-left px-4 py-2 rounded ${
                activeTab === "notifications"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Manage Notifications
            </button>
            <button
              onClick={() => setActiveTab("staff")}
              className={`text-left px-4 py-2 rounded ${
                activeTab === "staff"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Manage Staff
            </button>
            <button
              onClick={() => setActiveTab("materials")}
              className={`text-left px-4 py-2 rounded ${
                activeTab === "materials"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Manage Materials
            </button>
            <button
              onClick={() => setActiveTab("examinations")}
              className={`text-left px-4 py-2 rounded ${
                activeTab === "examinations"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              Manage Examinations
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          {activeTab === "notifications" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Post New Notification</h2>
              <form
                className="space-y-4 mb-8 border-b pb-8"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = {
                    title: formData.get("title"),
                    content: formData.get("content"),
                    category: formData.get("category"),
                    notification_type: formData.get("type"),
                  };
                  try {
                    const res = await fetch(
                      `${
                        import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
                      }/api/notifications/`,
                      {
                        method: "POST",
                        headers: {
                          ...authHeaders,
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                      }
                    );
                    if (res.ok) {
                      setSubmitMessage({
                        text: "Notification posted successfully!",
                        type: "success",
                      });
                      e.target.reset();
                      fetchNotifications();
                    } else {
                      const errorText = await res.text();
                      setSubmitMessage({
                        text: `Failed to post notification: ${res.status} ${res.statusText}\n${errorText}`,
                        type: "error",
                      });
                    }
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <textarea
                    name="content"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    rows="4"
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      name="category"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    >
                      <option value="general">General</option>
                      <option value="inter">Inter</option>
                      <option value="degree">Degree</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Type
                    </label>
                    <select
                      name="type"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    >
                      <option value="general">General</option>
                      <option value="exam">Examination</option>
                      <option value="admission">Admission</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Post Notification
                </button>
                {submitMessage.text && (
                  <div
                    className={`mt-2 text-sm ${
                      submitMessage.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}
              </form>

              {/* Edit Notification Form */}
              {editingNotification && (
                <div className="mb-8 border-b pb-8">
                  <h3 className="text-lg font-bold mb-4">Edit Notification</h3>
                  <form onSubmit={submitEditNotification} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        value={editingNotification.title}
                        onChange={(e) =>
                          setEditingNotification({
                            ...editingNotification,
                            title: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Content
                      </label>
                      <textarea
                        value={editingNotification.content}
                        onChange={(e) =>
                          setEditingNotification({
                            ...editingNotification,
                            content: e.target.value,
                          })
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Category
                        </label>
                        <select
                          value={editingNotification.category}
                          onChange={(e) =>
                            setEditingNotification({
                              ...editingNotification,
                              category: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        >
                          <option value="general">General</option>
                          <option value="inter">Inter</option>
                          <option value="degree">Degree</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Type
                        </label>
                        <select
                          value={editingNotification.notification_type}
                          onChange={(e) =>
                            setEditingNotification({
                              ...editingNotification,
                              notification_type: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        >
                          <option value="general">General</option>
                          <option value="exam">Examination</option>
                          <option value="admission">Admission</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingNotification(null)}
                      className="ml-2 text-gray-600"
                    >
                      Cancel
                    </button>
                    {editMessage.text && (
                      <div
                        className={`mt-2 text-sm ${
                          editMessage.type === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {editMessage.text}
                      </div>
                    )}
                  </form>
                </div>
              )}

              <h3 className="text-lg font-bold mb-4">Existing Notifications</h3>
              <div className="space-y-4">
                {notifications.map((note) => (
                  <div
                    key={note.id}
                    className="border p-4 rounded flex justify-between items-start"
                  >
                    <div>
                      <h4 className="font-bold">{note.title}</h4>
                      <p className="text-sm text-gray-600">{note.content}</p>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded mt-2 inline-block">
                        {note.category}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEditNotification(note)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteNotification(note.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "staff" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Add Staff Member</h2>
              <form
                className="space-y-4 mb-8 border-b pb-8"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  try {
                    const res = await fetch(
                      `${
                        import.meta.env.VITE_API_URL || "https://college-website-space-1.onrender.com"
                      }/api/staff/`,
                      {
                        method: "POST",
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "access_token"
                          )}`,
                        },
                        body: formData,
                      }
                    );
                    if (res.ok) {
                      setSubmitMessage({
                        text: "Staff member added successfully!",
                        type: "success",
                      });
                      e.target.reset();
                      fetchStaff();
                    } else {
                      const data = await res.json();
                      setSubmitMessage({
                        text: `Failed to add staff member: ${JSON.stringify(
                          data
                        )}`,
                        type: "error",
                      });
                    }
                  } catch (err) {
                    console.error(err);
                    setSubmitMessage({
                      text: "An error occurred while adding staff member.",
                      type: "error",
                    });
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <input
                      name="subject"
                      type="text"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Qualification *
                    </label>
                    <input
                      name="qualification"
                      type="text"
                      required
                      placeholder="e.g., M.Sc, Ph.D"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Category of Post *
                    </label>
                    <select
                      name="category_of_post"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    >
                      <option value="">Select Category</option>
                      <option value="Teaching Staff">Teaching Staff</option>
                      <option value="Non-Teaching Staff">
                        Non-Teaching Staff
                      </option>
                      <option value="Principal">Principal</option>
                      <option value="Management">Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Add Staff Member
                </button>
                {submitMessage.text && (
                  <div
                    className={`mt-2 text-sm ${
                      submitMessage.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}
              </form>

              {/* Edit Staff Form */}
              {editingStaff && (
                <div className="mb-8 border-b pb-8">
                  <h3 className="text-lg font-bold mb-4">Edit Staff Member</h3>
                  <form onSubmit={submitEditStaff} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Name *
                        </label>
                        <input
                          value={editingStaff.name}
                          onChange={(e) =>
                            setEditingStaff({
                              ...editingStaff,
                              name: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Subject *
                        </label>
                        <input
                          value={editingStaff.subject}
                          onChange={(e) =>
                            setEditingStaff({
                              ...editingStaff,
                              subject: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Qualification *
                        </label>
                        <input
                          value={editingStaff.qualification}
                          onChange={(e) =>
                            setEditingStaff({
                              ...editingStaff,
                              qualification: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Category of Post *
                        </label>
                        <select
                          value={editingStaff.category_of_post}
                          onChange={(e) =>
                            setEditingStaff({
                              ...editingStaff,
                              category_of_post: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        >
                          <option value="Teaching Staff">Teaching Staff</option>
                          <option value="Non-Teaching Staff">
                            Non-Teaching Staff
                          </option>
                          <option value="Principal">Principal</option>
                          <option value="Management">Management</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          value={editingStaff.email || ""}
                          onChange={(e) =>
                            setEditingStaff({
                              ...editingStaff,
                              email: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input
                          value={editingStaff.phone || ""}
                          onChange={(e) =>
                            setEditingStaff({
                              ...editingStaff,
                              phone: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingStaff(null)}
                      className="ml-2 text-gray-600"
                    >
                      Cancel
                    </button>
                    {editMessage.text && (
                      <div
                        className={`mt-2 text-sm ${
                          editMessage.type === "success"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {editMessage.text}
                      </div>
                    )}
                  </form>
                </div>
              )}

              <h3 className="text-lg font-bold mb-4">Current Staff</h3>
              <div className="space-y-4">
                {staff.map((member) => (
                  <div
                    key={member.id}
                    className="border p-4 rounded flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold">{member.name}</h4>
                      <p className="text-sm text-gray-600">
                        {member.category_of_post} - {member.subject}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => startEditStaff(member)}
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteStaff(member.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "materials" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Upload Material</h2>
              <form
                className="space-y-4 mb-8 border-b pb-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  fetch("https://college-website-space-1.onrender.com/api/materials/", {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                      )}`,
                    },
                    body: formData,
                  })
                    .then((res) => {
                      if (res.ok) {
                        setSubmitMessage({
                          text: "Material uploaded successfully!",
                          type: "success",
                        });
                        e.target.reset();
                        fetchMaterials();
                      } else {
                        setSubmitMessage({
                          text: "Failed to upload material.",
                          type: "error",
                        });
                      }
                    })
                    .catch((err) => console.error(err));
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    File
                  </label>
                  <input
                    name="file"
                    type="file"
                    required
                    className="mt-1 block w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Upload
                </button>
                {submitMessage.text && (
                  <div
                    className={`mt-2 text-sm ${
                      submitMessage.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}
              </form>

              <h3 className="text-lg font-bold mb-4">Existing Materials</h3>
              <div className="space-y-4">
                {materials.map((mat) => (
                  <div
                    key={mat.id}
                    className="border p-4 rounded flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold">{mat.title}</h4>
                      <a
                        href={mat.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </a>
                    </div>
                    <button
                      onClick={() => handleDeleteMaterial(mat.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "examinations" && (
            <div>
              <h2 className="text-xl font-bold mb-4">Post New Examination</h2>
              <form
                className="space-y-4 mb-8 border-b pb-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  fetch("https://college-website-space-1.onrender.com/api/examinations/", {
                    method: "POST",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                      )}`,
                    },
                    body: formData,
                  })
                    .then(async (res) => {
                      if (res.ok) {
                        setSubmitMessage({
                          text: "Examination posted successfully!",
                          type: "success",
                        });
                        e.target.reset();
                        fetchExaminations();
                      } else {
                        const errorText = await res.text();
                        setSubmitMessage({
                          text: `Failed to post examination: ${res.status} ${res.statusText}\n${errorText}`,
                          type: "error",
                        });
                      }
                    })
                    .catch((err) => console.error(err));
                }}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                  >
                    <option value="inter">Inter</option>
                    <option value="degree">Degree</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    name="date"
                    type="date"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    File (Schedule/Paper)
                  </label>
                  <input
                    name="file"
                    type="file"
                    required
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                    rows="3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Post Examination
                </button>
                {submitMessage.text && (
                  <div
                    className={`mt-2 text-sm ${
                      submitMessage.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}
              </form>

              <h3 className="text-lg font-bold mb-4">Existing Examinations</h3>
              <div className="space-y-4">
                {examinations.map((exam) => (
                  <div
                    key={exam.id}
                    className="border p-4 rounded flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold">{exam.title}</h4>
                      <p className="text-sm text-gray-600">
                        {exam.category.toUpperCase()} - {exam.date}
                      </p>
                      <a
                        href={exam.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View File
                      </a>
                    </div>
                    <button
                      onClick={() => handleDeleteExamination(exam.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
