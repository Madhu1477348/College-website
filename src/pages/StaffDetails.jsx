import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL } from "../api";

const StaffDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStaffDetails();
  }, [id]);

  const fetchStaffDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/staff/${id}/`);
      if (!response.ok) {
        throw new Error("Failed to fetch staff details");
      }
      const data = await response.json();
      setMember(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-600 font-bold mb-4">{error}</p>
        <button
          onClick={() => navigate("/staff")}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Back to Staff List
        </button>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-600">Staff member not found.</p>
        <button
          onClick={() => navigate("/staff")}
          className="text-blue-600 hover:text-blue-800 underline mt-4"
        >
          Back to Staff List
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <button
        onClick={() => navigate("/staff")}
        className="mb-8 text-blue-600 hover:text-blue-800 flex items-center font-medium transition-colors"
      >
        ← Back to Staff List
      </button>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/3 bg-gray-100 relative">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover min-h-[300px]"
              />
            ) : (
              <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-linear-to-br from-orange-100 to-purple-100 text-gray-400">
                <span className="text-6xl font-bold opacity-30">
                  {member.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-8 md:w-2/3">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold uppercase rounded-full tracking-wide mb-2">
                {member.category_of_post}
              </span>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {member.name}
              </h1>
              <p className="text-xl text-orange-600 font-medium">
                {member.subject}
              </p>
            </div>

            <div className="space-y-4 text-gray-600">
              <div className="flex items-start border-b border-gray-100 pb-3">
                <span className="font-semibold w-32 shrink-0">
                  Qualification:
                </span>
                <span>{member.qualification}</span>
              </div>

              {member.email && (
                <div className="flex items-start border-b border-gray-100 pb-3">
                  <span className="font-semibold w-32 shrink-0">Email:</span>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
              )}

              {member.phone && (
                <div className="flex items-start border-b border-gray-100 pb-3">
                  <span className="font-semibold w-32 shrink-0">Phone:</span>
                  <a
                    href={`tel:${member.phone}`}
                    className="text-blue-600 hover:underline"
                  >
                    {member.phone}
                  </a>
                </div>
              )}

              {/* Add more fields here if your backend sends them, e.g., Bio, Experience, etc. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;
