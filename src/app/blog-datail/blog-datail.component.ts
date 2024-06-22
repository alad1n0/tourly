import { Component, OnInit } from '@angular/core';
import { BLOG_CARDS } from '../models/mock-blog-cards';
import { ActivatedRoute } from '@angular/router';
import { BlogCards } from '../models/blog-cards';

@Component({
  selector: 'app-blog-datail',
  templateUrl: './blog-datail.component.html',
  styleUrls: ['./blog-datail.component.css']
})
export class BlogDatailComponent implements OnInit{
  blogId: number | undefined;
  blog: BlogCards | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params) {
        const id = params.get('id');
        if (id) {
          this.blogId = +id;
          this.blog = BLOG_CARDS.find(blog => blog.id === this.blogId);
        }
      }
    });
  }
}
