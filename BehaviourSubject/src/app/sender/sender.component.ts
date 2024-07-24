import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css',
})
export class SenderComponent {
  data!: string;

  constructor(private dataService: DataService) {
    // Subscribe to the BehaviorSubject observable
    this.dataService.currentData.subscribe((data) => (this.data = data));
  }

  // Method to update the data
  changeData() {
    this.dataService.changeData('Data from Sender');
  }
}
