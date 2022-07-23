import { Box, FormLabel, Input, VStack } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

type TextInputProps = {
  name: string;
  label: string;
  register: UseFormRegister<any>;
};

const TextInput = ({ name, label, register }: TextInputProps) => {
  return (
    <Box w={"full"}>
      <FormLabel textAlign="left">{label}</FormLabel>
      <Input type="text" {...register(name)} />
    </Box>
  );
};

export default TextInput;
