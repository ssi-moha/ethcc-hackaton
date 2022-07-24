import { HStack, VStack } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";
import TextInput from "./TextInput";

type ProductFieldsType = {
  register: UseFormRegister<any>;
  index?: number;
};

const ProductFields = ({ register, index }: ProductFieldsType) => {
  const baseName = index ? `products.${index}.` : "";

  return (
    <HStack py={4} borderBottomColor="super" borderBottomWidth={4}>
      <VStack flex={1} px={4}>
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

      <VStack flex={1} px={4}>
        <TextInput
          name={`${baseName}collection`}
          label="Collection name"
          register={register}
        />

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
    </HStack>
  );
};

export default ProductFields;
