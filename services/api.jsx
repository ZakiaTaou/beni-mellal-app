import axios from "axios";

const API_URL = "https://690e24dabd0fefc30a03a009.mockapi.io/api/v1/places";

export const fetchAttractions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erreur API:", error);
    throw error;
  }
};