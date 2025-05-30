import type { SizeTokens } from "tamagui";
import { Button, Fieldset, Input, Spinner, Text, YStack } from "tamagui";
import { useFormHook } from "@/hooks/useFormHook";
import { useLoginUserMutation } from "@/store/auth/authApi";
import { LoginFormData, loginSchema } from "@/types/login";

export function LoginForm(props: { size?: SizeTokens }) {
  const { setValue, errors, handleSubmit, status, setStatus } = useFormHook<
    LoginFormData,
    typeof loginSchema
  >(loginSchema);

  const [loginAction] = useLoginUserMutation();

  const onSubmit = async (data: LoginFormData) => {
    setStatus("submitting");
    await loginAction(data);
    setStatus("submitted");
  };

  return (
    <YStack padding="$4" flex={1}>
      <Text fontSize="$6" fontWeight="600" marginBottom={15}>
        Login form
      </Text>

      <Fieldset style={{ marginBottom: 25 }}>
        <Input
          placeholder="Email"
          onChangeText={(text) => setValue("email", text)}
          autoCapitalize="none"
        />
        {errors.email && <Text color="red">{errors.email.message}</Text>}
      </Fieldset>

      <Fieldset style={{ marginBottom: 25 }}>
        <Input
          placeholder="Пароль"
          onChangeText={(text) => setValue("password", text)}
          secureTextEntry
        />
        {errors.password && <Text color="red">{errors.password.message}</Text>}
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
