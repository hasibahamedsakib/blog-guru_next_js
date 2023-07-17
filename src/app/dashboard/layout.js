import React from "react";
export const metadata = {
  title: "Dashboard - Blog Guru",
  description: "Generated by create next app",
};
const layout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/dashboard/login">Login</a>
          </li>
          <li>
            <a href="/dashboard/register">Register</a>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1>Main Dashboard </h1>
        <div>{children}</div>
      </div>
    </>
  );
};

export default layout;