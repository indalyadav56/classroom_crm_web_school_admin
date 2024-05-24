import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Card className="w-1/4">
        <CardHeader>
          <span className="text-3xl">Register</span>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
