import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SupportChatComponent } from './pages/support-chat/support-chat';
import { SalesChatComponent } from './pages/sales-chat/sales-chat';
import { PlaygroundComponent } from './pages/playground/playground';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', title: 'Home', component: HomeComponent}, 
    {path: 'support', title: 'Support Chat', component: SupportChatComponent},
    {path: 'sales', title: 'Sales Chat', component: SalesChatComponent}, 
    {path: 'playground', title: 'Playground', component: PlaygroundComponent },
];
