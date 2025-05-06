import React from 'react'
import {Box, ChakraProvider} from '@chakra-ui/react'
import CodeEditor from './CodeEditor'
import theme from '../../theme'
export default function IDE() {
  return (
    <Box
      minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <ChakraProvider theme={theme}>
          <CodeEditor/>
        </ChakraProvider>
        </Box>
  )
}
