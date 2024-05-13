// import { useParams, useSearchParams } from "next/navigation";

const SingleBlogPage = ({params}) => {
  // const [year, month, date, id] = params.segments || [];

  // get params and query from client components.
  // const params2 = useParams();
  // const searchParams2 = useSearchParams();

  return (
    <div>
        {/* receive the query title from single blog page */}
        Single Blog {params.id}
    </div>
  );
};

export default SingleBlogPage;