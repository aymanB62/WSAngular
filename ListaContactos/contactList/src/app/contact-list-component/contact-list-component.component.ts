import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list-component.component.html',

  styleUrls: ['./contact-list-component.component.css']
})
export class ContactListComponent {
  @Input() contacts: any[] = [];
  @Output() contactSelected = new EventEmitter<any>();
  searchText: string = '';

  selectContact(contact: any) {
    this.contactSelected.emit(contact); // Emitir el contacto seleccionado al componente padre
  }
}
