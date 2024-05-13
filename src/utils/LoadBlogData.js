const LoadBlogData = async () => {
  // fetch all blogs in separate function for multiple use.
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache:"force-cache"
  });
  return res.json();
};

export default LoadBlogData;