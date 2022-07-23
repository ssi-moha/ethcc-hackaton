import { HStack, VStack } from "@chakra-ui/react";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { AdminFormValues } from "./AdminForm";
import TextInput from "./TextInput";

type ProductFieldsType = {
  register: UseFormRegister<any>;
  index?: number;
};

const ProductFields = ({ register, index }: ProductFieldsType) => {
  const baseName = index ? `products.${index}.` : "";

  return (
    <VStack py={4} borderBottomColor="super" borderBottomWidth={4}>
      <VStack>
        <TextInput
          name={`${baseName}name`}
          label="Product Name"
          register={register}
        />

        <TextInput
          name={`${baseName}image`}
          label="Product Image"
          register={register}
        />

        <TextInput
          name={`${baseName}price`}
          label="Price"
          register={register}
        />
      </VStack>

      <VStack>
        <TextInput
          name={`${baseName}curation`}
          label="Collection address"
          register={register}
        />

        <TextInput
          name={`${baseName}discount`}
          label="Discount for holders"
          register={register}
        />
      </VStack>
    </VStack>
  );
};

export default ProductFields;
