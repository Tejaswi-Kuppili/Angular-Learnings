import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource = new BehaviorSubject<string>('Initial Value');

  // Create an observable for the BehaviorSubject
  currentData = this.dataSource.asObservable();
  constructor() {}

  // Method to update the value of the BehaviorSubject
  changeData(data: string) {
    this.dataSource.next(data);
  }
}
