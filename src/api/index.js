const URL = "https://pacific-refuge-43085.herokuapp.com/";

export const getAllPosts = async () => {
  try {
    const response = await fetch(`${URL}api/posts`);
    const results = await response.json();
    return results.posts;
  } catch (error) {
    console.log(error);
  }
};
