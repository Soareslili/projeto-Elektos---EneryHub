import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Widget from "./components/Widget";
import ChartSection from "./components/ChartSection";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6 space-y-6">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Widget title="Consumo Total" value="24.5 MWh" iconColor="bg-green-500" percentage="+12.5%" />
            <Widget title="Clientes Ativos" value="1.247" iconColor="bg-blue-500" percentage="+3.2%" />
            <Widget title="Dispositivos" value="856" iconColor="bg-purple-500" percentage="0%" />
            <Widget title="Status Rede" value="99.8%" iconColor="bg-orange-500" percentage="-0.1%" />
          </section>
          <ChartSection />
        </main>
      </div>
    </div>
  );
}