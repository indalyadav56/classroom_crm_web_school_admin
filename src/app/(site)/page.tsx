"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import React from "react";

const Home = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main className="h-full w-full flex-1 flex p-4">
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="text-4xl font-bold">Manage Dashboard</h1>
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 3 }, (_, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>All Students</CardTitle>
                <CardDescription>10</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
    </main>
  );
};

export default Home;
