const LoadSingleBlogData = async (id) => {
    // fetch data dynamically
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache:"no-cache" // no-cache uses for dynamic data loading.
  });
  return res.json();
};

export default LoadSingleBlogData;