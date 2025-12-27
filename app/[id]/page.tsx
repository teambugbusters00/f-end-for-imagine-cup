import ClassOverview from "./ClassOverview";
import React from "react";

interface PageProps {
  params: {
    id: string | Promise<string>;
  };
}

export default async function Page({ params }: PageProps) {
  const classId = typeof params.id === "string" ? params.id : await params.id;

  return <ClassOverview classId={classId} />;
}
