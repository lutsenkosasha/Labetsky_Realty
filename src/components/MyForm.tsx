import { Formik, Form } from 'formik';
import React from 'react';
import CustomInput from './CustomInput';
import { Button, Box, Center } from '@chakra-ui/react';
import { validationSchema } from '../validation/validationSchema';

const MyForm: React.FC = () => {
  return (
    <Center mt={16}>
      <Box width="50%" p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
        <Formik
          initialValues={{
            name: '',
            address: '',
            floor: '',
            totalFloors: '',
            square: '',
            livingSquare: '',
            kitchenSquare: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <CustomInput name="name" type="text" placeholder="Введите название" />
              <CustomInput name="address" type="text" placeholder="Введите адрес" />
              <CustomInput name="floor" type="number" placeholder="Введите этаж" />
              <CustomInput name="totalFloors" type="number" placeholder="Введите общее количество этажей" />
              <CustomInput name="square" type="number" placeholder="Введите общую площадь" />
              <CustomInput name="livingSquare" type="number" placeholder="Введите жилую площадь" />
              <CustomInput name="kitchenSquare" type="number" placeholder="Введите площадь кухни" />
              <Button type="submit" mt={4} colorScheme="blue" width="full">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Center>
  );
};

export default MyForm;