import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const useProducts = (category) => {
  const path = "http://localhost:5000/products"
  const { data: products =[], error, isLoading, isValidating, mutate } = useSWR(
    category ? `${path}?category=${path}` : `${path}`, fetcher
  );

  return {
    products, error, isLoading, isValidating, mutate
  }
};

export default useProducts;