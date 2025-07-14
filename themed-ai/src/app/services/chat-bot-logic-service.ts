import { Injectable } from '@angular/core';
import { CreateMLCEngine, MLCEngineInterface } from '@mlc-ai/web-llm';
import { ChatSession } from '../models/chat-session.model';
import { ChatMessage } from '../models/chat-message.model';

@Injectable({ providedIn: 'root' })
export class ChatBotLogicService {
  private engine: MLCEngineInterface | null = null;
  private loadingPromise: Promise<void> | null = null;
  private readonly model = 'Llama-3.1-8B-Instruct-q4f32_1-MLC'; // Change if needed

  /** Call this ONCE at app startup (via app initializer) */
  init(): Promise<void> {
    if (this.engine) return Promise.resolve();
    if (!this.loadingPromise) {
      this.loadingPromise = CreateMLCEngine(this.model, {
        initProgressCallback: p =>
          console.log(`WebLLM loading: ${Math.round((p.progress || 0) * 100)}%`)
      }).then(engine => { this.engine = engine; });
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
