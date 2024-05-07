import React, { Children } from 'react';

const WithLayout = ({children}) => {
    return (
        <div>
            <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </nav>
        {children}
        <footer>Footer</footer>
        </div>
    );
};

export default WithLayout;