import { useField } from 'formik';
import { Input, FormErrorMessage, FormControl } from '@chakra-ui/react';
import React from 'react';

interface CustomInputProps {
  name: string;
  type: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ name, type, placeholder }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl isInvalid={!!meta.error && meta.touched} mb={4}> {/* Отступы между полями */}
      <Input {...field} type={type} placeholder={placeholder} />
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default CustomInput;