import { inject, Injectable, signal } from '@angular/core';
import { ChatSession } from '../models/chat-session.model';
import { ChatBotLogicService } from './chat-bot-logic-service';
import { CHAT_PROMPT, CHAT_START } from './chat-tokens';

@Injectable()
export class ChatService {
  #prompt = inject(CHAT_PROMPT);
  #chatStart = inject(CHAT_START);

  #session = signal<ChatSession>({
    messages: [
      ...this.#chatStart, 
    ]
  });

  #busy = signal(false);

  get session() {
    return this.#session.asReadonly();
  }

  get busy() {
    return this.#busy.asReadonly();
  }

  #logic = inject(ChatBotLogicService);


  sendUserMessage(text: string) {
    if (this.#busy()) return; // Prevent sending if already busy

    this.#busy.set(true);
    const trimmed = text.trim();
    if (!trimmed) return;
    // Add user message to the session
    this.#session.update(session => ({
      ...session,
      messages: [
        ...session.messages,
        { role: 'user', content: trimmed, timestamp: new Date() }
      ]
    }));
    // Generate bot reply after a short delay
    setTimeout(async () => {
      const nextMsg = await this.#logic.generateNextMessage(this.session(), this.#prompt);
      this.#busy.set(false);
      this.#session.update(session => ({
        ...session,
        messages: [
          ...session.messages,
          { role: 'assistant', content: nextMsg, timestamp: new Date() }
        ]
      }));
    }, 700 + Math.random() * 700);
  }
}
