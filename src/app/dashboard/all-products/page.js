import AllProductsTable from '@/components/dashboard/AllProductsTable';

const AllProductsPage = () => {
  
    return (
        <div className="w-full">
      <h3 className="text-2xl font-semibold">All Products</h3>
      <hr className="border-2 mt-3" />

      <AllProductsTable/>
    </div>
    );
};

export default AllProductsPage;