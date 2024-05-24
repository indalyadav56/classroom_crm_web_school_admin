"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Divide } from "lucide-react";

const Header = () => {
  const router = useRouter();
  return (
    <div className="h-14 w-full flex justify-between p-2">
      <div className="space-x-4">
        <Link
          href="/"
          className="p-4 bottom-1
         bg-red-200"
        >
          Home
        </Link>
        <Link
          href="/contactus"
          className="p-4 bottom-1
         bg-red-200"
        >
          Contact Us
        </Link>
        <Link
          href="/aboutus"
          className="p-4 bottom-1
         bg-red-200"
        >
          About Us
        </Link>
      </div>
      <div>
        <Button className="mx-4" onClick={() => router.push("/register")}>
          Register
        </Button>
        <Button onClick={() => router.push("/login")}>Login</Button>
      </div>
    </div>
  );
};

export default Header;
