import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchPostById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
