import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() post: Post;
  @Output() loadPost: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onLoadPostClick() {
    this.loadPost.emit();
    window.scroll(0,0)
  }

}
