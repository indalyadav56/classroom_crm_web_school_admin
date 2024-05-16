import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ClassDetails = () => {
  return (
    <div className="h-full w-full flex-1 flex flex-col p-4">
      <h1>ClassDetails</h1>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 2 }, (_, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Section {index + 1}</CardTitle>
              </CardHeader>
              <CardFooter>
                <Button>Delete</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
