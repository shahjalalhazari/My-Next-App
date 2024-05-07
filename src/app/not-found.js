import Link from "next/link";

const NotFound = () => {
    return (
      <div className="text-center text-red-500">
        <h1 className="text-3xl">404</h1>
        <h3 className="text-xl">Not Found</h3>
        <a className="text-black underline" href="/">Back to home</a>
      </div>
    );
};

export default NotFound;