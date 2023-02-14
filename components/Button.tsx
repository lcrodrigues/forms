import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";
import React from "react";

type Props = IButtonProps & {
  title: string;
};

export default function Button({ title, ...rest }: Props) {
  return (
    <NativeBaseButton
      w="full"
      h={16}
      bg="green.700"
      _pressed={{ bgColor: "green.800" }}
      {...rest}
    >
      <Text color="white" fontSize="md">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
