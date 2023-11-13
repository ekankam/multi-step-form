"use client";

import React from "react";
import * as z from "zod";

import SectionHeader from "../SectionHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import useStore from "@/store/useStore";
import Container from "../Container";

const formSchema = z.object({
  name: z.string().min(5, { message: "Name is required." }).max(100),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().min(10, { message: "Phone is required" }),
});

type ValidationSchema = z.infer<typeof formSchema>;

export default function PersonalInfo() {
  const { personalInfo, setPersonalInfo, increaseStep } = useStore(
    (state) => state
  );
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...personalInfo },
  });
  const {
    control,
    formState: { errors },
  } = form;

  const onSubmitHandler = (values: ValidationSchema) => {
    setPersonalInfo({ ...personalInfo, ...values });
    increaseStep(1);
  };

  return (
    <Container onNext={form.handleSubmit(onSubmitHandler)}>
      <SectionHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={() => form.handleSubmit(onSubmitHandler)}
        >
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  Name
                  <FormMessage>{errors.name?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red": errors.name?.message,
                      }
                    )}
                    placeholder="e.g. Stephen King"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  Email Address
                  <FormMessage>{errors.email?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red":
                          errors.email?.message,
                      }
                    )}
                    placeholder="e.g. stephenking@lorem.com"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  Phone Number
                  <FormMessage>{errors.phone?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red":
                          errors.phone?.message,
                      }
                    )}
                    placeholder="e.g. +1 234 567 890"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Container>
  );
}
