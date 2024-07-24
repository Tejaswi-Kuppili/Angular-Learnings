import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, delay, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  // posts: any[] = [];
  // showLoader: boolean = true;
  // loading: boolean = false;
  // error: string = '';

  // constructor(private dataService: DataService) {}

  // ngOnInit(): void {
  //   this.showLoader = true;

  //   // Custom Observable to delay the API call by 30 seconds
  //   const delayedApiCall$: Observable<any> = of(null).pipe(
  //     delay(40000),
  //     switchMap(() => this.dataService.getPosts())
  //   );

  //   delayedApiCall$.subscribe({
  //     next: (data) => {
  //       this.loading = false;
  //       this.showLoader = false;
  //       this.posts = data;
  //     },
  //     error: (err) => {
  //       this.error = 'Failed to load posts';
  //       this.loading = false;
  //       this.showLoader = false;
  //     },
  //   });
  // }

  posts: any[] = [];
  loading: boolean = true;
  showLoader: boolean = true;
  error: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
        this.showLoader = false;
      },
      error: (err) => {
        this.error = 'Failed to load posts';
        this.loading = false;
        this.showLoader = false;
      },
    });
    this.createObserver();
  }

  createObserver() {
    let observer = new Observable<number>((obj) => {
      setTimeout(() => {
        obj.next(10);
      }, 1000);
      setTimeout(() => {
        obj.next(20);
      }, 2000);
      setTimeout(() => {
        obj.next(30);
      }, 3000);
      setTimeout(() => {
        obj.next(40);
      }, 4000);
      setTimeout(() => {
        obj.complete();
      }, 2500);
    });
    /* observer.map((obj)=>{
      obj * 10;
    }); */
    observer.subscribe((data) => {
      console.log(data);
    });
  }
}
