import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css',
})
export class ReceiverComponent {
  data!: string;

  constructor(private dataService: DataService) {
    // Subscribe to the BehaviorSubject observable
    this.dataService.currentData.subscribe((data) => (this.data = data));
  }

  // Method to update the data
  changeData() {
    this.dataService.changeData('Data from Receiver');
  }
}
