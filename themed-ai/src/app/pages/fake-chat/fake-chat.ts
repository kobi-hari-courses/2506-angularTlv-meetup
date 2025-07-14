import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeChatBotService } from '../../services/fake-chat-bot-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fake-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fake-chat.html',
  styleUrls: ['./fake-chat.scss'],
})
export class AppFakeChatComponent {
  messageInput = signal('');
  constructor(public bot: FakeChatBotService) { }
  send() {
    const value = this.messageInput().trim();
    if (value) {
      this.bot.sendUserMessage(value);
      this.messageInput.set('');
    }
  }
}
