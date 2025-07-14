import { Injectable } from '@angular/core';
import { CreateMLCEngine, MLCEngineInterface } from '@mlc-ai/web-llm';
import { ChatSession } from '../models/chat-session.model';
import { ChatMessage } from '../models/chat-message.model';

@Injectable({ providedIn: 'root' })
export class ChatBotLogicService {
  private engine: MLCEngineInterface | null = null;
  private loadingPromise: Promise<void> | null = null;
private readonly model = 'Phi-3-mini-4k-instruct-q4f32_1-MLC';
  /** Call this ONCE at app startup (via app initializer) */
  init(): Promise<void> {
    if (this.engine) return Promise.resolve();
    if (!this.loadingPromise) {
      this.loadingPromise = CreateMLCEngine(this.model, {})
        .then(engine => { this.engine = engine; })
        .then(_ => console.log('Chat engine initialized:', this.model))
    }
    return this.loadingPromise;
  }

  /** Always safe to call; will await initialization if needed */
  async generateNextMessage(session: ChatSession, prompt: string): Promise<string> {
    await this.init();
    const messages: ChatMessage[] = [
      { role: 'system', content: prompt, timestamp: new Date() },
      ...session.messages
    ]

    const reply = await this.engine!.chat.completions.create({
      messages
    });
    return reply.choices[0].message.content!;
  }
}
