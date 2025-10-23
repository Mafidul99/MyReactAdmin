import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../pages/Admin/Common/Header";
import Sidebar from "../pages/Admin/Common/Sidebar";

const PrivateRoute = ({ allowedRoles }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (

    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            {
              <Outlet />
            }
          </main>
        </div>
      </div>
    </>
  )
}

export default PrivateRoute;
