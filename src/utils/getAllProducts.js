const getAllProducts = async (category) => {
    let url = "http://localhost:5000/products";
    if (category) {
        url += "?category=" + category
    }
    const res = await fetch(url, {cache: "no-cache"});
	return res.json();
};

export default getAllProducts;