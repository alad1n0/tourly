import { Component, OnInit } from '@angular/core';
import { tourlyaddress } from '../models/mock-tourly-address';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerAddress = tourlyaddress;

  ngOnInit(): void {
    
  }
}
