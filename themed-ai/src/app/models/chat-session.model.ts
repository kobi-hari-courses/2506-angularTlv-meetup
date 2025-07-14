import { ChatMessage } from "./chat-message.model";

export interface ChatSession {
  messages: ChatMessage[];
  id?: string;           // optional, for multi-chat support
  topic?: string;        // optional, for labeling chat purpose
}
