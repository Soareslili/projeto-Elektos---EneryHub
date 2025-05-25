import React from "react";
import { Menu, Bell, ChevronDown } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="bg-white shadow-sm flex items-center justify-between px-6 py-4">
      
    
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="text-gray-700 md:hidden">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
      </div>

  
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Buscar..."
          className="px-3 py-1 rounded-md border text-sm"
        />

       
        <button className="text-gray-600 hover:text-gray-800">
          <Bell size={20} />
        </button>

   
        <div className="flex items-center gap-1 cursor-pointer">
         
          <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-semibold">
            L
          </div>
          <ChevronDown size={16} className="text-gray-600" />
        </div>
      </div>
    </header>
  );
}
