import SideBar from "@/components/SideBar";
import { BookOpenCheck, Clock10, Layout, Users } from "lucide-react";

const layout = ({ children }: any) => {
  return (
    <>
      <SideBar
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: Layout,
          },
          {
            title: "Students",
            href: "/dashboard/students",
            icon: Users,
          },
          {
            title: "Attandences",
            href: "/dashboard/attendences",
            icon: Layout,
          },
          {
            title: "Parents",
            href: "/dashboard/parents",
            icon: Users,
          },
          {
            title: "Teachers",
            href: "/dashboard/teachers",
            icon: Users,
          },
          {
            title: "Timetable",
            href: "/dashboard/timetable",
            icon: Clock10,
          },
          {
            title: "Home Work",
            href: "/dashboard/homework",
            icon: Layout,
          },
          {
            title: "Classes",
            href: "/dashboard/classes",
            icon: Layout,
          },
          {
            title: "Sections",
            href: "/dashboard/sections",
            icon: Layout,
          },
          {
            title: "Subjects",
            href: "/dashboard/subjects",
            icon: BookOpenCheck,
          },
          {
            title: "Fees",
            href: "/dashboard/fees",
            icon: BookOpenCheck,
          },
          {
            title: "Website",
            href: "/dashboard/website",
            icon: BookOpenCheck,
          },
          {
            title: "Themes",
            href: "/dashboard/themes",
            icon: BookOpenCheck,
          },
        ]}
      />
      {children}
    </>
  );
};

export default layout;
