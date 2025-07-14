import { Component, inject } from '@angular/core';
import { AppFakeChatComponent } from '../fake-chat/fake-chat';
import { ChatService } from '../../services/chat-service';
import { CHAT_PROMPT, provideSales, SALES_CHAT_PROMPT } from '../../services/chat-tokens';

@Component({
  templateUrl: './sales-chat.html',
  styleUrls: ['./sales-chat.css'],
  providers: [ChatService, ...provideSales()],
  imports: [AppFakeChatComponent],
  standalone: true,
  selector: 'app-sales-chat',
})
export class SalesChatComponent {
}
