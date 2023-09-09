import { Component, ElementRef, ViewChild } from '@angular/core';
import { Page } from 'src/assets/interfaces/interfaces';
const pagesData: Page[] = [
  {
    name: 'home',
    path: 'home',
  },
  {
    name: 'about',
    path: 'about',
  },
  {
    name: 'portfolio',
    path: 'portfolio',
  },
  {
    name: 'contact',
    path: 'contact',
  },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('navMenu') nav!: ElementRef;
  toggleMenuProperty: boolean = true;

  pages: Page[];
  constructor() {
    this.pages = pagesData;
  }

  toggleMenu() {
    this.toggleMenuProperty = !this.toggleMenuProperty;
  }
}
