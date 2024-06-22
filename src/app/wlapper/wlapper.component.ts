import { Component } from '@angular/core';
import { ABOUT_BLOG } from '../models/mock-about-blog';

@Component({
  selector: 'app-wlapper',
  templateUrl: './wlapper.component.html',
  styleUrls: ['./wlapper.component.css']
})
export class WlapperComponent {

  toursBlogCards = ABOUT_BLOG;
}
