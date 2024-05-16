"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./ui/avatar";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    href: string;
    // variant: "default" | "ghost";
  }[];
}

export default function Nav({ links, isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 w-80"
    >
      <header className="my-4">
        <h1 className="text-4xl font-bold">School-Name</h1>
      </header>
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 ">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <Button className="w-full">{link.title}</Button>
          </Link>
        ))}
      </nav>
    </div>
  );
}
