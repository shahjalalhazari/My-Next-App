const getAllCategories = async() => {
	const res = await fetch("http://localhost:5000/categories",
		// { cache: "force-cache" }
		{ next: { revalidate: 5, } } // background revalidation
		// rebuild after each 5sec on background.
	);
	return res.json();
};

export default getAllCategories;