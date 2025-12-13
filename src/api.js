export const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://college-website-backend-3ct5.onrender.com/api";

export const FILE_BASE_URL = API_URL.replace("/api", "");
