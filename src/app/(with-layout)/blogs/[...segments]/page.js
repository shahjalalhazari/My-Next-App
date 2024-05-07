import React from 'react';

const SingleBlogPage = ({params}) => {
  const [year, month, date, id] = params.segments || [];

  return (
    <div>
      <ul>
        <li>{year}</li>
        <li>{month}</li>
        <li>{date}</li>
        <li>{id}</li>
      </ul>
    </div>
  );
};

export default SingleBlogPage;