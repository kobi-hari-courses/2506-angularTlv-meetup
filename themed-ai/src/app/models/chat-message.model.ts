import { ChatRole } from "./message-role.model";

export interface ChatMessage {
  role: ChatRole;
  content: string;
  timestamp?: Date;
}