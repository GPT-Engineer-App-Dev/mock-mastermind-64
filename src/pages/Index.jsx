import { useState } from "react";
import { Box, Heading, Input, Button, VStack, StackDivider, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <Box maxWidth="400px" mx="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>

      <Box mb={8}>
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" mr={4} />
        <Button onClick={handleAddTodo} colorScheme="blue">
          <FaPlus /> Add
        </Button>
      </Box>

      <VStack divider={<StackDivider />} spacing={4} align="stretch">
        {todos.map((todo, index) => (
          <Text key={index}>{todo}</Text>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
