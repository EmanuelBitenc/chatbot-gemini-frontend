import { useState } from "react";
import axios from "axios";
import { Flex, Box, Input, Button, Text } from "@chakra-ui/react";

interface Message {
  userMessage: string;
  botResponse: string;
}

function App() {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const enviarPrompt = async () => {
    try {
      if (!prompt) {
        return;
      }
      if (prompt.trim() === "clear" || prompt.trim() === "Clear") {
        setChatHistory([]);
        setPrompt("");
        return;
      }
      setResponse("Carregando...");
      setLoading(true);
      const res = await axios.post("http://localhost:5000/generate", {
        prompt,
      });
      setResponse(res.data.response); // Supondo que o back retorna { response: "..." }

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { userMessage: prompt, botResponse: res.data.response },
      ]);

      setPrompt("");
      setLoading(false);
    } catch (error) {
      console.error("Erro ao obter resposta do back-end:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && prompt) {
      enviarPrompt(); // Envia o prompt quando Enter é pressionado
    }
  };

  return (
    <>
      <Flex
        maxW={"1200px"}
        margin="auto"
        w="100vw"
        h="100vh"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          mb={5}
          w="100%"
          maxW={"100%"}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            h="60vh"
            overflowY={"scroll"}
          >
            {chatHistory.map((entry, index) => (
              <Box key={index}>
                <Text py={1} maxW={"90%"}>
                  <strong>Você:</strong> {entry.userMessage}
                </Text>
                <Text py={1} maxW={"90%"}>
                  <strong>Bot:</strong> {entry.botResponse}
                </Text>
              </Box>
            ))}
          </Box>
          <Input
            variant="outline"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Digite sua mensagem"
            colorPalette={"cyan"}
            onKeyPress={handleKeyPress}
          />
        </Box>
        <Button
          variant="subtle"
          colorPalette="cyan"
          onClick={enviarPrompt}
          disabled={loading}
        >
          Enviar
        </Button>
      </Flex>
    </>
  );
}

export default App;
