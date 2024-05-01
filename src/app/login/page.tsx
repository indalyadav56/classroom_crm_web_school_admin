import LoginForm from "@/components/LoginForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const page = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Card className="w-1/4">
        <CardHeader>
          <span className="text-3xl">Login</span>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
