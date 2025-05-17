
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Message {
  content: string;
  role: "user" | "assistant";
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // API key do Google Gemini
  const API_KEY = 'AIzaSyAGMeRCt2sze2CxSg0s_P2IzqbQbXLVvfc';
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  // Contexto fixo para limitar as respostas à região AMURES e Lages, SC
  const CONTEXT = (
    "Você é um assistente especializado em turismo na região da AMURES e Lages, Santa Catarina, Brasil. " +
    "Todas as respostas devem se limitar a essa região. " +
    "Forneça roteiros turísticos, dicas e informações considerando essa localidade. " +
    "Por exemplo, se o usuário pedir um roteiro turístico para uma data específica, " +
    "com número de pessoas e orçamento, responda com sugestões adequadas para essa região. " +
    "Organize suas respostas com títulos, subtítulos e listas para facilitar a leitura."
  );

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Adiciona a mensagem do usuário
    const userMessage: Message = { content: input, role: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Combina o contexto fixo com a mensagem do usuário
      const prompt = CONTEXT + "\nUsuário: " + input;

      const payload = {
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const responseData = await response.json();
      
      try {
        const textParts = responseData.candidates[0].content.parts;
        const fullText = textParts.map((part: any) => part.text).join('');
        
        // Adiciona a resposta do assistente
        const assistantMessage: Message = { content: fullText, role: "assistant" };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch (error) {
        console.error("Erro ao processar resposta:", error);
        toast({
          title: "Erro",
          description: "Não foi possível obter uma resposta. Tente novamente mais tarde.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast({
        title: "Erro",
        description: "Falha na comunicação com o assistente. Verifique sua conexão.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Botão flutuante para abrir o chat */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg"
        variant="default"
        size="icon"
        style={{ zIndex: 40 }}
      >
        <MessageCircle className="h-5 w-5" />
      </Button>

      {/* Container do chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90%] sm:w-[320px] md:w-[350px] bg-white rounded-lg shadow-lg border overflow-hidden flex flex-col" style={{ zIndex: 50, maxHeight: "500px", height: "450px" }}>
          {/* Header do chat */}
          <div className="bg-primary text-primary-foreground p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="font-medium text-sm">Assistente Turístico</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="h-7 w-7 rounded-full hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-3 bg-muted/30 space-y-3">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <MessageCircle className="h-10 w-10 mb-2 opacity-20" />
                <h3 className="font-medium text-base">Como posso ajudar?</h3>
                <p className="text-sm">Faça perguntas sobre turismo em Lages e região da AMURES</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg p-2.5 text-sm ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted prose prose-sm max-w-none"
                    }`}
                    style={message.role === "assistant" ? { whiteSpace: "pre-line" } : {}}
                  >
                    {message.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-lg p-2 bg-muted">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce" />
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: "0.2s" }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/30 animate-bounce" style={{ animationDelay: "0.4s" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input do chat */}
          <form onSubmit={handleSendMessage} className="p-2 border-t bg-background">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                disabled={isLoading}
                className="flex-1 text-sm"
              />
              <Button 
                type="submit" 
                size="sm"
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-3.5 w-3.5" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
