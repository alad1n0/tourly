import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { tourlyaddress } from '../models/mock-tourly-address';
import { MenuItem } from '../models/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  headeraddress = tourlyaddress;
  isMenuOpen: boolean = false
  isSearchOpen: boolean = false;

  menuItems: MenuItem[] = [
    { label: 'Про нас', route: '/about' },
    { label: 'Тури', route: '/tours' },
    { label: 'Галерея', route: '/gallery' },
    { label: 'Блог', route: '/blog' },
    { label: 'Зв\'язатися з нами', route: '/contact' }
  ];
  searchTerm: string = '';

  search(): boolean {
    const foundMenuItem = this.menuItems.find(item => item.label.toLowerCase().includes(this.searchTerm.toLowerCase()));
    if (foundMenuItem) {
      this.router.navigate([foundMenuItem.route]);
      return true;
    } else {
      return false;
    }
  }

  constructor(private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
    const header = document.querySelector("[data-header]");

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        this.renderer.addClass(header, "active");
      } else {
        this.renderer.removeClass(header, "active");
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSearchClick(): boolean {
    this.search();
    this.toggleSearch(!this.isSearchOpen);
    return false;
  }

  toggleSearch(isOpen: boolean): void {
    this.isSearchOpen = isOpen;
    if (!isOpen) {
      this.searchTerm = '';
    }
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }
}