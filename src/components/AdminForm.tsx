import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  VStack,
} from "@chakra-ui/react";
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
    <Box w={"full"} px={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Branding
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <TextInput register={register} label="App Name" name="appname" />
              <TextInput register={register} label="Logo Link" name="logo" />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Add Products
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
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
                  Add new product
                </Button>

                <Button mt={4} type="submit">
                  Save
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Products
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>test</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </form>
    </Box>
  );
}

export default AdminForm;
