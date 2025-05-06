import { useState } from "react";
import { Box, Button, Text, Textarea, useToast } from "@chakra-ui/react";
import { executeCode } from "../../api";

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [userInput, setUserInput] = useState(""); // 🔹 Store user input
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;
  
    try {
      setIsLoading(true);
      const result = await executeCode(language, sourceCode, userInput); // 🔹 Pass user input
  
      // Check if there's an error in stderr first
      if (result.run?.stderr) {
        setOutput(result.run.stderr.split("\n")); // Show the error message
        setIsError(true);
      } else {
        // If no error, display standard output
        const outputText = result.run?.stdout || "No output produced.";
        setOutput(outputText.split("\n"));
        setIsError(false);
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg" color="gray.500">
        Output
      </Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      <Box
        height="65vh" // Adjusted height
        p={2}
        color={isError ? "red.400" : "gray.500"}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#333"}
        overflowY="auto"
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : 'Click "Run Code" to see the output here'}
      </Box>

      {/* 🔹 Input field for user input */}
      <Textarea
      color="white"
        placeholder="Enter input here..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        mt={4}
        size="sm"
        borderColor="#333"
      />
    </Box>
  );
};

export default Output;
