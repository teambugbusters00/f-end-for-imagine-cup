"use client";

import dynamic from "next/dynamic";
import {
  User,
  MicOff,
  AlertTriangle,
  Activity,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

const ClassChart = dynamic(() => import("./ClassChart"), { ssr: false });

export default function DashboardClient() {
  const classes = [
    { name: "BCA Sem-1", mode: "LIVE", silent: 7, hesitant: 5, active: 18 },
    { name: "Class 12 – Math", mode: "OFFLINE", silent: 10, hesitant: 3, active: 12 },
  ];

  const topics = [
    { name: "Arrays", issue: "High hesitation" },
    { name: "Trigonometry", issue: "Low participation" },
  ];

  const getAlertStatus = (silent: number, hesitant: number, total: number) => {
    const silentPct = (silent / total) * 100;
    const hesitantPct = (hesitant / total) * 100;

    if (silentPct >= 30) {
      return {
        label: "Critical Silence",
        color: "text-red-600 bg-red-50",
        icon: <ShieldAlert size={16} />,
      };
    }

    if (hesitantPct >= 25) {
      return {
        label: "High Hesitation",
        color: "text-yellow-700 bg-yellow-50",
        icon: <AlertTriangle size={16} />,
      };
    }

    return {
      label: "Healthy Engagement",
      color: "text-green-700 bg-green-50",
      icon: <ShieldCheck size={16} />,
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Today's Classes */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-gray-800 uppercase tracking-wide">
          Today’s Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classes.map((cls, index) => {
            const total = cls.silent + cls.hesitant + cls.active;
            const alert = getAlertStatus(cls.silent, cls.hesitant, total);
            const chartData = [
              { name: "Silent", value: cls.silent },
              { name: "Hesitant", value: cls.hesitant },
              { name: "Active", value: cls.active },
            ];

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="font-semibold text-gray-800 text-lg">{cls.name}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cls.mode === "LIVE"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {cls.mode}
                  </span>
                </div>

                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 ${alert.color}`}
                >
                  {alert.icon}
                  {alert.label}
                </div>

                <div className="flex gap-6 text-gray-600 mb-5 text-sm">
                  <span className="flex items-center gap-1">
                    <MicOff size={16} /> Silent: {cls.silent}
                  </span>
                  <span className="flex items-center gap-1">
                    <AlertTriangle size={16} /> Hesitant: {cls.hesitant}
                  </span>
                  <span className="flex items-center gap-1">
                    <Activity size={16} /> Active: {cls.active}
                  </span>
                </div>

                <div className="h-44">
                  <ClassChart data={chartData} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Topics Needing Attention */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-gray-800 uppercase tracking-wide">
          Topics Needing Attention
        </h2>
        <ul className="space-y-3">
          {topics.map((topic, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <AlertTriangle size={18} className="text-red-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-800">{topic.name}</p>
                <p className="text-gray-500 text-sm">{topic.issue}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
