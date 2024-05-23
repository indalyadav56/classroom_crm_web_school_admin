import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const WebsiteThemes = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 200 }, (_, index) => (
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
  );
};

export default WebsiteThemes;
