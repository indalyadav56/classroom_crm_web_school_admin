"use client";
import { MyTimer } from "@/components/MyTimer";
import React from "react";

const Attendences = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="h-full w-full flex-1 flex flex-col p-4">
      <h1>Attendences</h1>
      <div>
        <MyTimer expiryTimestamp={time} />
      </div>
    </div>
  );
};

export default Attendences;
