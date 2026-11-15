import React from "react";
import AdminSidebar from "../../Components/Admin-components/AdminSidebar";
import AdminHeader from "../../Components/Admin-components/AdminHeader";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hiddden ">
      <div className="fixed top-0 h-screen shrink-0">
        <AdminSidebar />
      </div>
      <section className="flex-1 flex flex-col ml-72">
        <div className="shrink-0">
          <AdminHeader />
        </div>
        <main className="overflow-y-auto p-10">
          dashboard
        </main>
      </section>
    </div>
  );
}
