import axios from "axios";

export const fetchImagesWithQuery = async (searchQuery, page) => {
  const params = new URLSearchParams({
    key: "27887941-26f96d7878e5748cf06133d38",
    q: searchQuery,
    lang: "pl",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 40,
    page,
  });

  try {
    const response = await axios.get(`https://pixabay.com/api/?${params}`);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export default fetchImagesWithQuery;