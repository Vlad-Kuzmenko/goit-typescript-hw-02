import axios from "axios";

export const getImage = async (query = "", page = 1) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID EINvLyhT0S6-JD-0Eft1WfQyPsHIenT7TLa16yF5Cfo",
    },
    params: {
      query,
      page,
      per_page: 20,
    },
  });
  return response.data;
};
