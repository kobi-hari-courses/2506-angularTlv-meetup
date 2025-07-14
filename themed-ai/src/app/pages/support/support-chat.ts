import { Component, inject } from '@angular/core';
import { AppFakeChatComponent } from '../fake-chat/fake-chat';
import { FakeChatBotService } from '../../services/fake-chat-bot-service';

@Component({
  templateUrl: './support-chat.html',
  styleUrls: ['./support-chat.scss'],
  providers: [FakeChatBotService],
  imports: [AppFakeChatComponent],
  standalone: true,
})
export class SupportChatComponent {
  readonly bot = inject(FakeChatBotService);
}
