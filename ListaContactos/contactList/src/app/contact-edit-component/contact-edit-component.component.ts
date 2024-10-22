import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit-component.component.html',
  styleUrls: ['./contact-edit-component.component.css']
})
export class ContactEditComponent {
  @Input() contact: any;
  @Output() saveContact = new EventEmitter<any>();
  @Output() cancelEdit = new EventEmitter<void>();

  onSubmit() {
    this.saveContact.emit(this.contact); // Emitir el contacto actualizado
  }

  cancelEdit() {
    this.cancelEdit.emit(); // Cancelar la edición
  }
}
