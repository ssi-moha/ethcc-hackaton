import { Box, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ProductFieldsType } from "./AdminForm";
import ProductFields from "./ProductFields";

type ProductFormProps = {
  onSubmit: (values: ProductFieldsType) => void;
};

const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const { handleSubmit, register } = useForm<ProductFieldsType>({});

  return (
    <Box w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProductFields register={register} />

        <Button type="submit" w="full" mt="4" mb="4">
          Add
        </Button>
      </form>
    </Box>
  );
};

export default ProductForm;
