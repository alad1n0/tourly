import { Component } from '@angular/core';
import { BLOG_CARDS } from '../models/mock-blog-cards';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blogCards = BLOG_CARDS

}
