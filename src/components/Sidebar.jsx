import React from "react";
import { Home, Zap, Users, Monitor, BarChart2, Settings } from "lucide-react";

const menuItems = [
  { icon: <Home size={18} />, label: "Dashboard" },
  { icon: <Zap size={18} />, label: "Energia" },
  { icon: <Users size={18} />, label: "Clientes" },
  { icon: <Monitor size={18} />, label: "Dispositivos" },
  { icon: <BarChart2 size={18} />, label: "Relatórios" },
  { icon: <Settings size={18} />, label: "Configurações" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-md p-4 hidden md:block">
      <h2 className="text-xl font-bold text-green-600 mb-6">EnergyHub</h2>
      <nav className="space-y-2">
        {menuItems.map((item, idx) => (
          <button key={idx} className="flex items-center gap-3 w-full text-left text-gray-700 hover:text-green-600 p-2 rounded-md hover:bg-green-50">
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-20 text-xs text-gray-400">Admin<br />admin@energyhub.com</div>
    </aside>
  );
}
