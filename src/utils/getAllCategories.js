const getAllCategories = async() => {
	const res = await fetch("http://localhost:5000/categories", {
		cache:"force-cache"
	});
	return res.json();
};

export default getAllCategories;