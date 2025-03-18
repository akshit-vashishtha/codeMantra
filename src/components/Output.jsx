import { useState } from "react";
import { Box, Button, Text, Textarea, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";

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

      // Ensure output is not undefined
      const outputText = result.run?.stdout || "No output produced.";
      setOutput(outputText.split("\n"));

      setIsError(!!result.run?.stderr);
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
      <Text mb={2} fontSize="lg">
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
        color={isError ? "red.400" : ""}
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
