import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss'],
})
export class PortfolioCardComponent {
  @Input() imgSrc: string = 'port1.png';
  @ViewChild('card') card!: ElementRef<HTMLDivElement>;

  showModal = false;
  isShown = false;

  onMouseEnter() {
    this.isShown = true;
  }
  onMouseLeave() {
    this.isShown = false;
  }
  toggleModal() {
    this.showModal = !this.showModal
  }
}
