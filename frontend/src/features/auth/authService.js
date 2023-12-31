import axios from "axios";

const API_URL = "https://argentbank-7khp.onrender.com/api/v1/user/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "signup", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userProfile");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
