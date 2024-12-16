import React from 'react';
import { ChakraProvider, Center, Heading } from '@chakra-ui/react';
import MyForm from './components/MyForm';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Center height="100vh" flexDirection="column" justifyContent="center">
        <MyForm />
      </Center>
    </ChakraProvider>
  );
};

export default App;