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

interface ClassChartProps {
  data: { name: string; Silent: number; Hesitant: number; Active: number }[];
}

export default function ClassChart({ data }: ClassChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Silent" />
        <Bar dataKey="Hesitant" />
        <Bar dataKey="Active" />
      </BarChart>
    </ResponsiveContainer>
  );
}
