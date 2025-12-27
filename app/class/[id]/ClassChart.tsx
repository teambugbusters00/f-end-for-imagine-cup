"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

/* ---------- Types ---------- */

type StudentChartData = {
  name: string;
  Silent: number;
  Hesitant: number;
  Active: number;
};

type WeeklyAttendanceData = {
  day: string;
  present: number;
};

interface ClassChartProps {
  data: StudentChartData[] | WeeklyAttendanceData[];
  type?: "student" | "weekly"; // default = student
}

/* ---------- Component ---------- */

export default function ClassChart({
  data,
  type = "student",
}: ClassChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey={type === "student" ? "name" : "day"} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Legend />

        {type === "student" ? (
          <>
            <Bar dataKey="Silent" fill="#000000" />
            <Bar dataKey="Hesitant" fill="#000000" />
            <Bar dataKey="Active" fill="#000000" />
          </>
        ) : (
          <Bar dataKey="present" fill="#000000" />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}
