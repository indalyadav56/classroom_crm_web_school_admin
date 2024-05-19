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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { DeleteIcon, Trash2 } from "lucide-react";

const data = [
  {
    subject: "Hindi",
    subject_code: "HN",
  },
  {
    subject: "English",
    subject_code: "EN",
  },
];

const Subject = () => {
  const [state, setState] = useState(false);

  const handleAddSubject = () => {
    data.push({
      subject: "New Subject",
      subject_code: "NS",
    });
    setState(false);
  };

  return (
    <div className="h-full w-full flex-1 flex flex-col p-4">
      <h1 className="text-4xl font-bold">Manage Subjects</h1>
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
              <Button type="submit" onClick={handleAddSubject}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-3 gap-2">
          {data.map((item) => (
            <Card key={item.subject_code}>
              <CardHeader>
                <CardTitle>{item.subject}</CardTitle>
              </CardHeader>
              <CardContent>
                <h1>Indal kumar</h1>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button size="icon">
                  <Trash2 />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subject;
