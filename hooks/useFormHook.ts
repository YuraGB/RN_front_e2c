import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { z, ZodSchema } from "zod";

export const useFormHook = <T extends z.infer<Z>, Z extends ZodSchema<any>>(
  schema: Z,
  initialValues?: T,
) => {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  }: UseFormReturn<T> = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: initialValues,
  });

  const [status, setStatus] = React.useState<
    "off" | "submitting" | "submitted"
  >("off");

  return {
    status,
    setStatus,
    errors,
    setValue,
    handleSubmit,
    control,
    reset,
  };
};
