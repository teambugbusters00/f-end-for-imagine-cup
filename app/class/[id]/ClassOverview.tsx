"use client";

import ClassChart from "./ClassChart";
import { ShieldAlert, ShieldCheck, AlertTriangle, MicOff, Activity } from "lucide-react";

interface Student {
  name: string;
  status: "Silent" | "Hesitant" | "Normal";
  participation: number;
}

interface Topic {
  name: string;
  issueLevel: "High" | "Medium" | "Low";
}

interface ClassOverviewProps {
  classId: string;
}

export default function ClassOverview({ classId }: ClassOverviewProps) {
  const students: Student[] = [
    { name: "Rahul", status: "Silent", participation: 1 },
    { name: "Ayesha", status: "Normal", participation: 3 },
    { name: "Suman", status: "Hesitant", participation: 2 },
  ];

  const topics: Topic[] = [
    { name: "Arrays", issueLevel: "High" },
    { name: "Loops", issueLevel: "Medium" },
    { name: "Functions", issueLevel: "Low" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Silent":
        return "text-red-600";
      case "Hesitant":
        return "text-yellow-500";
      default:
        return "text-green-600";
    }
  };

  const getTopicBar = (level: string) => {
    switch (level) {
      case "High":
        return "bg-black w-4/5";
      case "Medium":
        return "bg-black w-2/5";
      default:
        return "bg-black w-1/5";
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Class: BCA Sem-1 – Programming Fundamentals</h1>

      {/* Student Activity */}
      <section className="mb-6">
        <h2 className="font-semibold mb-2">STUDENT ACTIVITY</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Participation</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td className="px-4 py-2">{student.name}</td>
                  <td className={`px-4 py-2 ${getStatusColor(student.status)}`}>
                    ● {student.status}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 flex-1 rounded ${
                            i < student.participation ? "bg-black" : "bg-gray-300"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Topic Timeline */}
      <section>
        <h2 className="font-semibold mb-2">TOPIC TIMELINE</h2>
        <div className="space-y-2">
          {topics.map((topic, idx) => (
            <div key={idx}>
              <p className="text-gray-700">{topic.name}</p>
              <div className="h-4 rounded bg-gray-200">
                <div className={`h-4 rounded ${getTopicBar(topic.issueLevel)}`}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chart */}
      <section className="mt-6">
        <h2 className="font-semibold mb-2">Participation Chart</h2>
        <div className="h-64">
          <ClassChart
            data={students.map((s) => ({
              name: s.name,
              Silent: s.status === "Silent" ? s.participation : 0,
              Hesitant: s.status === "Hesitant" ? s.participation : 0,
              Active: s.status === "Normal" ? s.participation : 0,
            }))}
          />
        </div>
      </section>
    </div>
  );
}
