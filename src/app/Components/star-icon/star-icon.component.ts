import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-icon',
  templateUrl: './star-icon.component.html',
  styleUrls: ['./star-icon.component.scss']
})
export class StarIconComponent {
@Input() color:string = '#fff'
}
