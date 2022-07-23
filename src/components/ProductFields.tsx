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
    <VStack border="solid 1px" borderColor="black">
      <HStack>
        <TextInput
          name={`products.${index}.name`}
          label="Name"
          register={register}
        />
        <TextInput
          name={`products.${index}.image`}
          label="Image Link"
          register={register}
        />
      </HStack>
      <HStack>
        <TextInput
          name={`products.${index}.price`}
          label="Price"
          register={register}
        />
        <TextInput
          name={`products.${index}.discount`}
          label="Discount"
          register={register}
        />
      </HStack>
      <HStack alignSelf="flex-start">
        <TextInput
          name={`products.${index}.curation`}
          label="Curation"
          register={register}
        />
      </HStack>
    </VStack>
  );
};

export default ProductFields;
