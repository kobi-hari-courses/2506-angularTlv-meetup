import { Injectable, signal } from '@angular/core';

@Injectable()
export class FakeChatBotService {
  messages = signal<{ from: 'bot' | 'user', text: string }[]>([
    { from: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  private botReplies = [
    "I'm here to assist you.",
    "Could you please provide more details?",
    "Thank you for your message!",
    "Let me check that for you.",
    "Can you try again?",
    "Is there anything else I can help with?"
  ];
  sendUserMessage(text: string) {
    this.messages.update(msgs => [...msgs, { from: 'user', text }]);
    setTimeout(() => this.fakeBotReply(), 700 + Math.random() * 900);
  }
  private fakeBotReply() {
    const reply = this.botReplies[Math.floor(Math.random() * this.botReplies.length)];
    this.messages.update(msgs => [...msgs, { from: 'bot', text: reply }]);
  }
}
