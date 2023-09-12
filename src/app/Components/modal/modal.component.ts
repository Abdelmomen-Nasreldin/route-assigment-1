import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() imgSrc: string = ""
  @Input() showModal:boolean = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
}
