"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

const LoginForm = () => {
  const formSchema = z.object({
    email: z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "password must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("data:->", values);
  }

  return (
    <main>
      <Form {...form}>
        <form
          method="post"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full h-12" type="submit">
            Login
          </Button>
        </form>
      </Form>
      <div className="w-full my-2 flex justify-center items-center">
        <hr className="w-full my-4 " />
        <span className="px-2 text-sm">or</span>
        <hr className="w-full " />
      </div>
      <div className="flex my-4 gap-4">
        <Button variant="outline" className="w-full h-12">
          <Image
            src="/google.png"
            width={36}
            height={36}
            alt="google_logo"
            className="mr-2 h-4 w-4"
          />
          Google
        </Button>

        <Button variant="outline" className="w-full h-12">
          <Image
            src="/github.png"
            width={36}
            height={36}
            alt="google_logo"
            className="mr-2 h-4 w-4"
          />
          GitHub
        </Button>
      </div>
    </main>
  );
};

export default LoginForm;
