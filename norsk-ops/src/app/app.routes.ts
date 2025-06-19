import { Route, Routes } from '@angular/router';
import { ProfilePage } from './pages/profile-page/profile-page';
import { DashboardPage } from './pages/dashboard-page/dashboard-page';
import { UsersPage } from './pages/users-page/users-page';
import { ControlPage } from './pages/control-page/control-page';
import { ReportsPage } from './pages/reports-page/reports-page';

export type PageRoute = Route & ({
    title?: string;
    icon?: string;
});

export const routes: PageRoute[] = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardPage, title: 'Dashboard', icon: 'dashboard' },
    { path: 'profile', component: ProfilePage, title: 'Profile', icon: 'person' }, 
    { path: 'users', component: UsersPage, title: 'Users', icon: 'supervisor_account' },
    { path: 'control', component: ControlPage, title: 'Control Panel', icon: 'settings' },
    { path: 'reports', component: ReportsPage, title: 'Reports', icon: 'bar_chart'},
];
