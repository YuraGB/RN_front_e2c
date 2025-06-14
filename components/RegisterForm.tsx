import type { SizeTokens } from "tamagui";
import { z } from "zod";
import { Button, Fieldset, Input, Spinner, Text, YStack } from "tamagui";
import { useFormHook } from "@/hooks/useFormHook";
import { useRegisterUserMutation } from "@/store/auth/authApi";
import { RegisterFormData, ReisterSchema } from "@/types/register";

export function RegisterForm(props: { size?: SizeTokens }) {
  const { setValue, errors, handleSubmit, status, setStatus } = useFormHook<
    RegisterFormData,
    typeof ReisterSchema
  >(ReisterSchema);

  const [onRegisterAction] = useRegisterUserMutation();

  const onSubmit = async (data: RegisterFormData) => {
    setStatus("submitting");
    await onRegisterAction(data);
    setStatus("submitted");
  };

  return (
    <YStack padding="$4" flex={1}>
      <Text fontSize="$6" fontWeight="600" marginBottom={15}>
        Registration form
      </Text>

      <Fieldset style={{ marginBottom: 25 }}>
        <Input
          placeholder="Name"
          onChangeText={(text) => setValue("username", text)}
          autoCapitalize="none"
        />
        {errors.username && <Text color="red">{errors.username.message}</Text>}
      </Fieldset>

      <Fieldset style={{ marginBottom: 25 }}>
        <Input
          placeholder="Last name"
          onChangeText={(text) => setValue("lastname", text)}
          autoCapitalize="none"
        />
        {errors.lastname && <Text color="red">{errors.lastname.message}</Text>}
      </Fieldset>

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
          placeholder="Password"
          onChangeText={(text) => setValue("password", text)}
          secureTextEntry
        />
        {errors.password && <Text color="red">{errors.password.message}</Text>}
      </Fieldset>

      <Button
        onPress={handleSubmit(onSubmit)}
        disabled={status === "submitting"}
      >
        {status === "submitting" ? <Spinner /> : "Register"}
      </Button>
    </YStack>
  );
}
