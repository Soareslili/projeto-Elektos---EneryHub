import React from "react";
import { Bolt } from "lucide-react";

export default function Widget({ title, value, iconColor, percentage }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm text-gray-500">{title}</h3>
          <p className="text-xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${iconColor} text-white`}>
          <Bolt size={20} />
        </div>
      </div>
      <p className={`text-sm mt-2 ${percentage.includes('-') ? 'text-red-500' : 'text-green-500'}`}>
        {percentage}
      </p>
    </div>
  );
}
