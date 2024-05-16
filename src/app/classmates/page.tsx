import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Classmates = () => {
  return (
    <div className="h-full w-full flex-1  flex flex-col p-4">
      <h1>Classmates</h1>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-4 gap-1">
          {Array.from({ length: 200 }, (_, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Section {index + 1}</CardTitle>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <h1>Indal Kumar</h1>
              </CardContent>
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

export default Classmates;
