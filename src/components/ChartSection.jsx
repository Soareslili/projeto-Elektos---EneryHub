import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend
} from "recharts";

const barData = [
  { name: "Jan", consumo: 4000 },
  { name: "Feb", consumo: 3000 },
  { name: "Mar", consumo: 2000 },
  { name: "Apr", consumo: 2780 },
  { name: "May", consumo: 1890 },
  { name: "Jun", consumo: 2390 },
];

const pieData = [
  { name: "Residencial", value: 45 },
  { name: "Comercial", value: 30 },
  { name: "Industrial", value: 20 },
  { name: "Público", value: 5 },
];

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"];

export default function ChartSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold mb-2 text-gray-700">Consumo Mensal (kWh)</h2>
        <BarChart width={500} height={250} data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="consumo" fill="#10B981" />
        </BarChart>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold mb-2 text-gray-700">Distribuição por Tipo</h2>
        <PieChart width={300} height={250}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}
