"use client";
import { useState } from "react";

const TabsPage = () => {
  const [activeTab, setActiveTab] = useState<"climbing" | "bouldering">(
    "climbing"
  );

  return (
    <div className="max-w-2xl mx-auto my-16 flex flex-col gap-16">
      {/* Tabs */}
      <div className="flex justify-center gap-6 p-4">
        <button
          className={`w-40 h-16 text-xl font-semibold rounded-lg transition-all duration-300 shadow-md
      ${
        activeTab === "climbing"
          ? "bg-blue-500 text-white shadow-lg scale-105"
          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
      }`}
          onClick={() => setActiveTab("climbing")}
        >
          Climbing
        </button>

        <button
          className={`w-40 h-16 text-xl font-semibold rounded-lg transition-all duration-300 shadow-md
      ${
        activeTab === "bouldering"
          ? "bg-blue-500 text-white shadow-lg scale-105"
          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
      }`}
          onClick={() => setActiveTab("bouldering")}
        >
          Bouldering
        </button>
      </div>

      {/* Tab Content */}
      <div className="mx-4">
        {activeTab === "climbing" ? <ClimbingTable /> : <BoulderingTable />}
      </div>
    </div>
  );
};

const ClimbingTable = () => {
  const data = [
    { yds: "5.2", french: "1" },
    { yds: "5.3", french: "2" },
    { yds: "5.4", french: "3" },
    { yds: "5.5", french: "4" },
    { yds: "5.6", french: "5a" },
    { yds: "5.7", french: "5b" },
    { yds: "5.8", french: "5c" },
    { yds: "5.9", french: "6a" },
    { yds: "5.10a", french: "6a+" },
    { yds: "5.10b", french: "6a+" },
    { yds: "5.10c", french: "6b" },
    { yds: "5.10d", french: "6b+" },
    { yds: "5.11a", french: "6c" },
    { yds: "5.11b", french: "6c+" },
    { yds: "5.11c", french: "7a" },
    { yds: "5.11d", french: "7a+" },
    { yds: "5.12a", french: "7b" },
    { yds: "5.12b", french: "7b+" },
    { yds: "5.12c", french: "7c" },
    { yds: "5.12d", french: "7c+" },
    { yds: "5.13a", french: "7c+" },
    { yds: "5.13b", french: "8a" },
    { yds: "5.13c", french: "8a+" },
    { yds: "5.13d", french: "8b" },
    { yds: "5.14a", french: "8b+" },
    { yds: "5.14b", french: "8c" },
    { yds: "5.14c", french: "8c+" },
    { yds: "5.14d", french: "9a" },
    { yds: "5.15a", french: "9a+" },
    { yds: "5.15b", french: "9b" },
    { yds: "5.15c", french: "9b+" },
  ];

  return (
    <table className="w-full border-collapse table-fixed shadow-lg rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
          <th className="border border-gray-600 p-3 text-left">YDS</th>
          <th className="border border-gray-600 p-3 text-left">French</th>
        </tr>
      </thead>
      <tbody>
        {data.map((grade, index) => (
          <tr
            key={index}
            className={`text-gray-900 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-200 transition`}
          >
            <td className="border border-gray-300 p-3 w-1/2">{grade.yds}</td>
            <td className="border border-gray-300 p-3 w-1/2">{grade.french}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const BoulderingTable = () => {
  const data = [
    { v_scale: "V0", font_scale: "4" },
    { v_scale: "V1", font_scale: "5" },
    { v_scale: "V2", font_scale: "5+" },
    { v_scale: "V3", font_scale: "6a" },
    { v_scale: "V4", font_scale: "6a+" },
    { v_scale: "V5", font_scale: "6c" },
    { v_scale: "V6", font_scale: "6c+" },
    { v_scale: "", font_scale: "7a" },
    { v_scale: "V7", font_scale: "7a+" },
    { v_scale: "V8", font_scale: "7b" },
    { v_scale: "", font_scale: "7b+" },
    { v_scale: "V9", font_scale: "7c" },
    { v_scale: "V10", font_scale: "7c+" },
    { v_scale: "V11", font_scale: "8a" },
    { v_scale: "V12", font_scale: "8a+" },
    { v_scale: "V13", font_scale: "8b" },
    { v_scale: "V14", font_scale: "8b+" },
    { v_scale: "V15", font_scale: "9a" },
    { v_scale: "V16", font_scale: "8c+" },
    { v_scale: "V17", font_scale: "9a" },
  ];

  return (
    <table className="w-full border-collapse table-fixed shadow-lg rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
          <th className="border border-gray-600 p-3 text-left">V-Scale</th>
          <th className="border border-gray-600 p-3 text-left">Font Scale</th>
        </tr>
      </thead>
      <tbody>
        {data.map((grade, index) => (
          <tr
            key={index}
            className={`text-gray-900 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-200 transition`}
          >
            <td className="border border-gray-300 p-3 w-1/2">
              {grade.v_scale}
            </td>
            <td className="border border-gray-300 p-3 w-1/2">
              {grade.font_scale}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabsPage;
