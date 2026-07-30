import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-slate-200
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-1 flex-col lg:ml-72">
        <Navbar openSidebar={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 md:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}