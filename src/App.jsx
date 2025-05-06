import {Box, ChakraProvider} from '@chakra-ui/react'
import CodeEditor from './components/Code editor/CodeEditor'
import Landing from './components/Landing'
import theme from './theme'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './Routes';

// import './index.css'
export default function App() {
  return (
    <Router>
    <AppRoutes />
  </Router>
    
  )
}
