import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ItemService, Item } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  standalone: true,
  imports: [FormsModule],  // Add FormsModule here
})
export class ItemCreateComponent {
  item: Item = { id: 0, name: '' }; // Initialize the item

  constructor(private itemService: ItemService, private router: Router) {}

  createItem(): void {
    this.itemService.createItem(this.item).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }
}
