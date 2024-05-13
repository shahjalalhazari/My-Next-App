import LoadBlogData from "@/utils/LoadBlogData";
import LoadSingleBlogData from "@/utils/LoadSingleBlogData";

// set page title using generate meta data dynamically
export const generateMetadata = async({params}) => {
  const {title} = await LoadSingleBlogData(params.id);
  
  return {
    title: title
  }
};


// fetch dynamic data in static way
export const generateStaticParams = async () => {
  const blogs = await LoadBlogData();

  return blogs.map(({id}) => ({
    id: id.toString()
  }))

}

const SingleBlogPage = async ({params}) => {
  // load dynamic blog data by ID
  const {id, title, body} = await LoadSingleBlogData(params.id)
  

  return (
    <div>
      <div className="p-5">
        <h2 className="text-2xl">{id}. {title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;