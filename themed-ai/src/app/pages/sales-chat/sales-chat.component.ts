import { Component, inject } from '@angular/core';
import { FakeChatBotService } from '../../services/fake-chat-bot-service';
import { AppFakeChatComponent } from '../fake-chat/fake-chat';

@Component({
  templateUrl: './sales-chat.component.html',
  styleUrls: ['./sales-chat.component.css'],
  providers: [FakeChatBotService],
  imports: [AppFakeChatComponent],
  standalone: true,
})
export class SalesChatComponent {
  readonly bot = inject(FakeChatBotService);
}
