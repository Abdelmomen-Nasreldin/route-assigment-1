import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  cards:string[] = ["port1.png","port2.png","port3.png","port1.png","port2.png","port3.png"]
}
