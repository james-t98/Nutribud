import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Training', url: '/folder/training', icon: 'barbell' },
    { title: 'Food', url: '/folder/food', icon: 'leaf' },
    { title: 'Profile', url: '/folder/profile', icon: 'person-circle' },
    { title: 'Settings', url: '/folder/settings', icon: 'settings' },
    { title: 'Notes', url: '/folder/notes', icon: 'clipboard'}
  ];
  public labels = ['Family', 'Friends', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
