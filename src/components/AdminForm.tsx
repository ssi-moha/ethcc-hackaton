import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import { enableSismoBadge, updateAppFromDB } from "../clients/firebase";
import ProductFields from "./ProductFields";
import ProductForm from "./ProductForm";
import TextInput from "./TextInput";

export type ProductFieldsType = {
  name: string;
  image: string;
  price: string;
  collection: string;
  discount: string;
  curation: string;
};

export type AdminFormValues = {
  appname: string;
  logo: string;
  products: ProductFieldsType[];
  sismo?: boolean;
};

type AdminFormProps = {
  id: string;
  appname: string;
  logo: string;
  products: ProductFieldsType[];
  sismo?: boolean;
  refresh: Function;
};

function AdminForm({
  appname,
  logo,
  products,
  id,
  sismo,
  refresh,
}: AdminFormProps) {
  const {
    isOpen: isAddProductFormOpen,
    onOpen: setIsAddProductFormOpen,
    onClose: setIsAddProductFormClose,
  } = useDisclosure();

  const { handleSubmit, register, control } = useForm<AdminFormValues>({
    defaultValues: {
      appname,
      products,
      logo,
    },
  });

  const toggleSismo = async () => {
    await enableSismoBadge({ appname, logo, products, sismo }, id);
    refresh();
  };

  const { fields, append } = useFieldArray({
    control,
    name: "products",
  });

  const addProductForm = (values: ProductFieldsType) => {
    append(values);
  };

  const onSubmit = async (values: AdminFormValues) => {
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
              <Button mt={4} onClick={setIsAddProductFormOpen}>
                Add Product
              </Button>
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
            <AccordionPanel pb={4}>
              {fields.map((field, index) => {
                return (
                  <ProductFields
                    index={index}
                    key={field.id}
                    register={register}
                  />
                );
              })}

              <VStack align="flex-start">
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
                  Enable Sismo Zk feature
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Switch isChecked={sismo} onChange={toggleSismo} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </form>

      <Modal onClose={setIsAddProductFormClose} isOpen={isAddProductFormOpen}>
        <ModalOverlay />
        <ModalContent py={2}>
          <VStack px={8}>
            <ModalHeader mx="auto" textAlign="center">
              <Text fontWeight="bold">Add a product</Text>
            </ModalHeader>
            <ProductForm onSubmit={addProductForm} />
          </VStack>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default AdminForm;
