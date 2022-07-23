import { HStack, VStack } from "@chakra-ui/react";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { AdminFormValues } from "./AdminForm";
import TextInput from "./TextInput";

type ProductFieldsType = {
  register: UseFormRegister<any>;
  control: Control<AdminFormValues, object>;
  index: number;
};

const ProductFields = ({ register, index }: ProductFieldsType) => {
  return (
    <HStack py={4} borderBottomColor={"grey"} borderBottomWidth={1}>
      <HStack flex={1}>
        <TextInput
          name={`products.${index}.name`}
          label="Product Name"
          register={register}
        />

        <TextInput
          name={`products.${index}.image`}
          label="Product Image"
          register={register}
        />

        <TextInput
          name={`products.${index}.price`}
          label="Price"
          register={register}
        />
      </HStack>

      <HStack alignSelf="flex-start">
        <TextInput
          name={`products.${index}.curation`}
          label="Collection address"
          register={register}
        />

        <TextInput
          name={`products.${index}.discount`}
          label="Discount for holders"
          register={register}
        />
      </HStack>
    </HStack>
  );
};

export default ProductFields;
