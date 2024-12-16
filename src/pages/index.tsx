import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MyForm from '../components/MyForm';

const Home: React.FC = () => {
  return (
    <ChakraProvider>
      <div>
        <MyForm />
      </div>
    </ChakraProvider>
  );
};

export default Home;