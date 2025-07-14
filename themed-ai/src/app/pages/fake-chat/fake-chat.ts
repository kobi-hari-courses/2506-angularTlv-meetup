import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat-service';

@Component({
  selector: 'app-fake-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fake-chat.html',
  styleUrls: ['./fake-chat.scss'],
})
export class AppFakeChatComponent {
  messageInput = signal('');
  constructor(public bot: ChatService) { }
  send() {
    const value = this.messageInput().trim();
    if (value) {
      this.bot.sendUserMessage(value);
      this.messageInput.set('');
    }
  }
}
