import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div style={{ padding: "10px" }}>
      <h1>Upload files using Cloudindary service in Mern stack project</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/upload-multiple">Upload Multiple Files</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
