import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-details-component.component.html',
  styleUrls: ['./contact-details-component.component.css']
})
export class ContactDetailComponent {
  @Input() contact: any;
  @Output() editContact = new EventEmitter<void>();

  editContact() {
    this.editContact.emit(); // Emitir evento para iniciar la edición
  }
}
