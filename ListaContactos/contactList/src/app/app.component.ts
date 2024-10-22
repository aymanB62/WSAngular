import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts = [
    { name: 'Rhody Farquhar', email: 'rfarquhar@va.gov', phone: '2906036054', website: 'http://prweb.com', address: '032 Waubesa Avenue', notes: 'Lorem ipsum dolor sit amet...', avatar: 'path/to/avatar1.png' },
    { name: 'Farand Valde', email: 'fvalde@domain.com', phone: '750750750', website: 'http://example.com', address: '123 Example St', notes: 'Nulla facilisi...', avatar: 'path/to/avatar2.png' },
    // ...más contactos
  ];

  selectedContact: any = null;
  isEditing = false;

  // Cuando se selecciona un contacto en la lista
  onContactSelected(contact: any) {
    this.selectedContact = contact;
    this.isEditing = false; // Asegúrate de que no está en modo edición
  }

  // Cuando se hace clic en "Editar"
  onEditContact() {
    this.isEditing = true;
  }

  // Cuando se guarda un contacto editado
  onSaveContact(updatedContact: any) {
    // Actualiza el contacto seleccionado con los nuevos valores
    this.selectedContact = updatedContact;
    this.isEditing = false;
  }

  // Cuando se cancela la edición
  onCancelEdit() {
    this.isEditing = false;
  }
}
