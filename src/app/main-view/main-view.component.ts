import { Component, OnInit } from '@angular/core';
import testPosts from 'src/assets/testPosts/testPosts.js';
import { Post } from 'src/app/components/post/post-model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  viewSelection: string = "home";
  testPosts: Post[] = testPosts;
  loadedPosts: Post[] = testPosts.slice(0,4);
  selectedPost: Post;

  constructor() { }

  ngOnInit(): void {
  }

  selectAbout() {
    this.viewSelection = "about";
  }

  selectHome() {
    this.viewSelection = "home";
  }

  onLoadPost(post: Post) {
    this.selectedPost = post;
    this.viewSelection = "post";
  }

}
