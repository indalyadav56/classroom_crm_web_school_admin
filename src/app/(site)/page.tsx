"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import React, { useEffect } from "react";
import { useStudentStore } from "@/store/studentStore";
import { useTeacherStore } from "@/store/teacherStore";
import { useParentStore } from "@/store/parentStore";
import { useClassStore } from "@/store/classStore";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const studentStore = useStudentStore();
  const teacherStore = useTeacherStore();
  const parentStore = useParentStore();
  const claassStore = useClassStore();

  useEffect(() => {
    Promise.all([
      studentStore.getAllStudents(),
      teacherStore.getAllTeachers(),
      parentStore.getAllParents(),
      claassStore.getAllClasses(),
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="h-full w-full flex-1 flex p-4">
      <div className="flex-1 overflow-y-auto p-4">
        <h1 className="text-4xl font-bold">Manage Dashboard</h1>
        <div className="my-4 grid grid-cols-4 gap-2">
          <Card onClick={() => router.push(`/students`)}>
            <CardHeader>
              <CardTitle>All Students</CardTitle>
              <CardDescription>10</CardDescription>
            </CardHeader>
          </Card>
          <Card onClick={() => router.push(`/teachers`)}>
            <CardHeader>
              <CardTitle>All Teachers</CardTitle>
              <CardDescription>10</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>All Parents</CardTitle>
              <CardDescription>10</CardDescription>
            </CardHeader>
          </Card>
          <Card onClick={() => router.push(`/classes`)}>
            <CardHeader>
              <CardTitle>All Classes</CardTitle>
              <CardDescription>10</CardDescription>
            </CardHeader>
          </Card>
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
