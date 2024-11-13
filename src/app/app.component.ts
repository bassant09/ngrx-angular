import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    
    // Clear any existing toasts on page load
    this.messageService.clear();
  }
  title = 'ngrx-angular';

}
