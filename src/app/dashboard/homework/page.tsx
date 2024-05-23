"use client";
import { Button } from "@/components/ui/button";
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
import { useState } from "react";

const Assignments = () => {
  const [state, setState] = useState(false);
  return (
    <div className="p-4 flex-1 w-full h-full ">
      <h1 className="text-4xl font-bold">Manage Assignments</h1>
      <div className="h-14 w-full flex justify-end ">
        <Dialog open={state} onOpenChange={setState} modal={false}>
          <DialogTrigger asChild>
            <Button variant="outline" onClick={() => setState(true)}>
              Add Subject
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[425px]"
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <DialogHeader>
              <DialogTitle>Add Subject</DialogTitle>
              <DialogDescription>
                Make changes to your profile here.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Subject
                </Label>
                <Input
                  id="subject"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <h1>Assignments</h1>
    </div>
  );
};

export default Assignments;
