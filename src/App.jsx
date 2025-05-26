import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Widget from "./components/Widget";
import ChartSection from "./components/ChartSection";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      
      <div className="hidden md:block">
        <Sidebar />
      </div>

    
      <div className={`fixed inset-0 z-50 flex md:hidden transition-all`}>
     
        {sidebarOpen && (
          <div
            className="absolute inset-0 bg-black bg-opacity-30"
            onClick={toggleSidebar}
          />
        )}

     
        <div
          className={`w-64 bg-white shadow-lg h-full transition-transform duration-300 transform ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } ml-auto`}
        >
          <Sidebar />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <main className="p-6 space-y-6">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Widget
              title="Consumo Total"
              value="24.5 MWh"
              iconColor="bg-green-500"
              percentage="+12.5%"
              className="hover:scale-105 hover:shadow-lg transition-transform duration-300"
            />
            <Widget
              title="Clientes Ativos"
              value="1.247"
              iconColor="bg-blue-500"
              percentage="+3.2%"
              className="hover:scale-105 hover:shadow-lg transition-transform duration-300"
            />
            <Widget
              title="Dispositivos"
              value="856"
              iconColor="bg-purple-500"
              percentage="0%"
              className="hover:scale-105 hover:shadow-lg transition-transform duration-300"
            />
            <Widget
              title="Status Rede"
              value="99.8%"
              iconColor="bg-orange-500"
              percentage="-0.1%"
              className="hover:scale-105 hover:shadow-lg transition-transform duration-300"
            />
          </section>
          <ChartSection />
        </main>
      </div>
    </div>
  );
}
