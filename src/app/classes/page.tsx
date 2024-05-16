"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";

const StudentClass = () => {
  const [state, setState] = useState(false);
  return (
    <div className="h-full w-full flex-1 flex flex-col p-4">
      <div className="h-14 w-full flex justify-end p-2">
        <Dialog open={state} onOpenChange={setState} modal={false}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setState(true)}>
              Add Class
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[425px]"
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setState(false)}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }, (_, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Class {index + 1}</CardTitle>
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

export default StudentClass;
