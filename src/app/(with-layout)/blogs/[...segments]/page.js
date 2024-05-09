"use client"

import { useParams, useSearchParams } from "next/navigation";

const SingleBlogPage = ({params, searchParams}) => {
  const [year, month, date, id] = params.segments || [];

  // get params and query from client components.
  const params2 = useParams();
  const searchParams2 = useSearchParams();

  console.log(params2.segments);
  console.log(searchParams2.get("title"));


  return (
    <div>
      <ul>
        <li>{year}</li>
        <li>{month}</li>
        <li>{date}</li>
        <li>{id}</li>

        {/* receive the query title from single blog page */}
        <li>{searchParams.title}</li>
      </ul>
    </div>
  );
};

export default SingleBlogPage;