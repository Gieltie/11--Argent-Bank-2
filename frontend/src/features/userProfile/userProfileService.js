import axios from "axios";

const API_URL = "https://argentbank-7khp.onrender.com/api/v1/user/profile";

// Get user profile
const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, null, config);

  if (response.data.body) {
    localStorage.setItem("userProfile", JSON.stringify(response.data.body));
  }

  return response.data;
};

// Update user profile
const updateProfile = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL, data, config);

  if (response.data) {
    localStorage.setItem("userProfile", JSON.stringify(response.data.body));
  }

  return response.data;
};

const userProfileService = {
  getProfile,
  updateProfile,
};

export default userProfileService;
