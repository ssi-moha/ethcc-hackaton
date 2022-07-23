import { Button, HStack, VStack } from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import { updateAppFromDB } from "../clients/firebase";
import ProductFields from "./ProductFields";
import TextInput from "./TextInput";

export type ProductFieldsType = {
  name: string;
  image: string;
  price: string;
  discount: string;
  curation: string;
};

export type AdminFormValues = {
  appname: string;
  logo: string;
  products: ProductFieldsType[];
};

type AdminFormProps = {
  id: string;
  products: ProductFieldsType[];
};

function AdminForm({ products, id }: AdminFormProps) {
  const { handleSubmit, register, control } = useForm<AdminFormValues>({
    defaultValues: {
      products,
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "products",
  });

  const addProductForm = () => {
    append({});
  };

  const onSubmit = async (values: AdminFormValues) => {
    console.log(values);
    await updateAppFromDB(values, id);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput register={register} label="App Name" name="appname" />
      <TextInput register={register} label="Logo Link" name="logo" />

      {fields.map((field, index) => {
        return (
          <ProductFields
            index={index}
            key={field.id}
            register={register}
            control={control}
          />
        );
      })}

      <VStack align="flex-start">
        <Button onClick={addProductForm} mt={4} type="button">
          +
        </Button>
        <Button mt={4} type="submit">
          Save
        </Button>
      </VStack>
    </form>
  );
}

export default AdminForm;
