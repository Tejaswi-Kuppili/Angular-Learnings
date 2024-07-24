import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  imports: [ButtonComponent],
})
export class AdminDashboardComponent {
  handleButtonClick() {
    alert('Button clicked in Admin Dashboard!');
  }
}
