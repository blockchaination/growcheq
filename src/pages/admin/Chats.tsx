import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Search, MessageSquare, User, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Conversation {
  id: string;
  session_id: string;
  status: string;
  lead_quality: string | null;
  created_at: string;
}

interface Message {
  id: string;
  sender: string;
  message: string;
  created_at: string;
}

export default function Chats() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [filteredConversations, setFilteredConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [qualityFilter, setQualityFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadConversations();
  }, []);

  useEffect(() => {
    filterConversations();
  }, [conversations, searchTerm, qualityFilter]);

  const loadConversations = async () => {
    try {
      const { data, error } = await supabase
        .from('chat_conversations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setConversations(data || []);
    } catch (error) {
      console.error('Error loading conversations:', error);
      toast({
        title: "Error",
        description: "Failed to load conversations",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filterConversations = () => {
    let filtered = conversations;

    if (searchTerm) {
      filtered = filtered.filter((c) =>
        c.session_id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (qualityFilter !== "all") {
      filtered = filtered.filter((c) => c.lead_quality === qualityFilter);
    }

    setFilteredConversations(filtered);
  };

  const loadMessages = async (conversationId: string) => {
    setIsLoadingMessages(true);
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error loading messages:', error);
      toast({
        title: "Error",
        description: "Failed to load messages",
        variant: "destructive",
      });
    } finally {
      setIsLoadingMessages(false);
    }
  };

  const openConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    loadMessages(conversation.id);
  };

  const getLeadQualityColor = (quality: string | null) => {
    switch (quality) {
      case 'hot': return 'bg-red-500/10 text-red-700 border-red-500/20';
      case 'warm': return 'bg-orange-500/10 text-orange-700 border-orange-500/20';
      case 'cold': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      default: return 'bg-muted';
    }
  };

  const updateLeadQuality = async (id: string, quality: string) => {
    try {
      const { error } = await supabase
        .from('chat_conversations')
        .update({ lead_quality: quality })
        .eq('id', id);

      if (error) throw error;

      setConversations(conversations.map(c => 
        c.id === id ? { ...c, lead_quality: quality } : c
      ));

      if (selectedConversation?.id === id) {
        setSelectedConversation({ ...selectedConversation, lead_quality: quality });
      }

      toast({
        title: "Lead Quality Updated",
        description: "Conversation has been updated successfully",
      });
    } catch (error) {
      console.error('Error updating lead quality:', error);
      toast({
        title: "Error",
        description: "Failed to update lead quality",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">Chat Conversations</h1>
        <p className="text-muted-foreground">
          View and manage all website chat interactions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by session ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={qualityFilter} onValueChange={setQualityFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Filter by quality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Leads</SelectItem>
            <SelectItem value="hot">Hot</SelectItem>
            <SelectItem value="warm">Warm</SelectItem>
            <SelectItem value="cold">Cold</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filteredConversations.length === 0 ? (
          <Card>
            <CardContent className="flex items-center justify-center h-32">
              <p className="text-muted-foreground">No conversations found</p>
            </CardContent>
          </Card>
        ) : (
          filteredConversations.map((conversation) => (
            <Card 
              key={conversation.id}
              className="cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => openConversation(conversation)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Session {conversation.session_id.slice(-8)}
                    </CardTitle>
                    <CardDescription>
                      {format(new Date(conversation.created_at), "PPP 'at' p")}
                    </CardDescription>
                  </div>
                  {conversation.lead_quality && (
                    <Badge className={getLeadQualityColor(conversation.lead_quality)}>
                      {conversation.lead_quality}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div onClick={(e) => e.stopPropagation()}>
                  <Select
                    value={conversation.lead_quality || "unqualified"}
                    onValueChange={(value) => updateLeadQuality(conversation.id, value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Set lead quality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hot">Hot</SelectItem>
                      <SelectItem value="warm">Warm</SelectItem>
                      <SelectItem value="cold">Cold</SelectItem>
                      <SelectItem value="unqualified">Unqualified</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Chat Messages Dialog */}
      <Dialog open={!!selectedConversation} onOpenChange={() => setSelectedConversation(null)}>
        <DialogContent className="max-w-2xl h-[600px] flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>Conversation Details</span>
              {selectedConversation?.lead_quality && (
                <Badge className={getLeadQualityColor(selectedConversation.lead_quality)}>
                  {selectedConversation.lead_quality}
                </Badge>
              )}
            </DialogTitle>
          </DialogHeader>

          <ScrollArea className="flex-1 pr-4">
            {isLoadingMessages ? (
              <div className="flex items-center justify-center h-32">
                Loading messages...
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${
                      message.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'bot' ? 'bg-primary/10' : 'bg-accent/10'
                    }`}>
                      {message.sender === 'bot' ? (
                        <Bot className="h-4 w-4 text-primary" />
                      ) : (
                        <User className="h-4 w-4 text-accent" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2.5 max-w-[75%] ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.message}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {format(new Date(message.created_at), "p")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
