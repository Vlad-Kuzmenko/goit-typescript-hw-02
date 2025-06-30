import axios from "axios";

interface GetImage {
  total: number;
  total_pages: number;
  results: Result[];
}

interface Result {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
    small: string;
  };
}

export const getImage = async (
  query: string = "",
  page: number = 1
): Promise<GetImage> => {
  const response = await axios.get<GetImage>(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: "Client-ID EINvLyhT0S6-JD-0Eft1WfQyPsHIenT7TLa16yF5Cfo",
      },
      params: {
        query,
        page,
        per_page: 20,
      },
    }
  );
  return response.data;
};
