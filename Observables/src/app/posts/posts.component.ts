import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  posts: any[] = [];
  loading: boolean = true;
  error: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load posts';
        this.loading = false;
      },
    });
  }
}
