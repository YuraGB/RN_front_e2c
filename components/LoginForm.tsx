import type { SizeTokens } from "tamagui";
import { z } from "zod";
import { Button, Fieldset, Input, Spinner, Text, YStack } from "tamagui";
import { useFormHook } from "@/hooks/useFormHook";
import { useLoginUserMutation } from "@/store/authApi";
import { useEffect } from "react";
import { storage } from "@/utils/getPlatform";

const loginSchema = z.object({
  email: z.string().email("Incorrect e-mail"),
  password: z.string().min(6, "At least 6 symbols"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm(props: { size?: SizeTokens }) {
  const { setValue, errors, handleSubmit, status, setStatus } = useFormHook<
    LoginFormData,
    typeof loginSchema
  >(loginSchema);

  const [loginAction, { data }] = useLoginUserMutation();

  const onSubmit = async (data: LoginFormData) => {
    setStatus("submitting");
    await loginAction(data);
    setStatus("submitted");
  };

  useEffect(() => {
    if (data) {
      storage.setItem("accessToken", data.token);
    }
  }, [data]);

  return (
    <YStack $gap={"$4"} padding='$4' flex={1}>
      <Text fontSize='$6' fontWeight='600' marginBottom={15}>
        Login form
      </Text>

      <Fieldset style={{ marginBottom: 25 }}>
        <Input
          placeholder='Email'
          onChangeText={(text) => setValue("email", text)}
          autoCapitalize='none'
        />
        {errors.email && <Text color='red'>{errors.email.message}</Text>}
      </Fieldset>

      <Fieldset style={{ marginBottom: 25 }}>
        <Input
          placeholder='Пароль'
          onChangeText={(text) => setValue("password", text)}
          secureTextEntry
        />
        {errors.password && <Text color='red'>{errors.password.message}</Text>}
      </Fieldset>

      <Button
        onPress={handleSubmit(onSubmit)}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? <Spinner /> : "Sign in"}
      </Button>
    </YStack>
  );
}
