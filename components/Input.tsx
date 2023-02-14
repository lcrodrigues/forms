import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";
import React from "react";

type InputProps = IInputProps & {
  errorMessage?: string | null;
};

export default function Input({
  errorMessage = null,
  isInvalid,
  ...rest
}: InputProps) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={4} isInvalid={invalid}>
      <NativeBaseInput
        placeholderTextColor="gray.500"
        isInvalid={invalid}
        bg="gray.200"
        fontSize="md"
        h={16}
        _focus={{ bg: "gray.400", borderWidth: 2, borderColor: "green.500" }}
        _invalid={{ borderWidth: 2, borderColor: "red.500" }}
        {...rest}
      />

      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
