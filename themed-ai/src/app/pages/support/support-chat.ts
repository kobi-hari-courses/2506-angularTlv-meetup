import { Component, inject } from '@angular/core';
import { AppFakeChatComponent } from '../fake-chat/fake-chat';
import { ChatService } from '../../services/chat-service';
import { provideSupport } from '../../services/chat-tokens';

@Component({
  templateUrl: './support-chat.html',
  styleUrls: ['./support-chat.scss'],
  providers: [ChatService, ...provideSupport()],
  imports: [AppFakeChatComponent],
  standalone: true,
  selector: 'app-support-chat',
})
export class SupportChatComponent {
}
