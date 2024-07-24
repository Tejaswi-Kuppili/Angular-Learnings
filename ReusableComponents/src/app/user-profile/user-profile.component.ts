import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  imports: [ButtonComponent],
})
export class UserProfileComponent {
  handleButtonClick() {
    alert('Button clicked in User Profile!');
  }
}
