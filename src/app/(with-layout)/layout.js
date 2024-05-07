import CustomNavbar from "@/components/CustomNavbar";


const WithLayout = ({children}) => {
  return (
    <div>
      <CustomNavbar/>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default WithLayout;