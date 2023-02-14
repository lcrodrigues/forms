import { VStack, Heading, Center } from "native-base";
import { useForm, Controller } from "react-hook-form";
import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const signUpSchema = yup.object({
  name: yup.string().required("Inform name."),
  email: yup.string().required("Inform e-mail.").email("Invalid e-mail."),
  password: yup
    .string()
    .required("Inform password.")
    .min(6, "Must contain at least 6 digits."),
  passwordConfirm: yup
    .string()
    .required("Confirm your password.")
    .oneOf([yup.ref("password")], "Passwords doesn't match."),
});

export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = (data: FormDataProps) => {
    console.log(data);
  };

  return (
    <VStack flex={1} bgColor={"gray.300"} px={8}>
      <Center>
        <Heading my={24} fontSize="xl">
          Create your account
        </Heading>

        <Controller
          control={control}
          name="name"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Name"
              onChangeText={onChange}
              errorMessage={errors.name?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="E-mail"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Password"
              onChangeText={onChange}
              secureTextEntry
              errorMessage={errors.password?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="passwordConfirm"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="Confirm password"
              onChangeText={onChange}
              secureTextEntry
              errorMessage={errors.passwordConfirm?.message}
            />
          )}
        />

        <Button title="Register" onPress={handleSubmit(handleSignUp)} />
      </Center>
    </VStack>
  );
}
